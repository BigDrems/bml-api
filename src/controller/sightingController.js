import { prisma } from "../prisma/client.js";
import { randomUUID } from "crypto";

// Constants
import {
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  DEFAULT_RADIUS_METERS,
  SIGHTING_INCLUDE
} from "./sighting/constants.js";

// Helpers
import {
  validateRequest,
  handleError,
  uploadFileToStorage,
  runAIClassification,
  runAILocationIdentification,
  findOrCreateSpecies,
  findOrCreateLocation,
  updateSightingGeometry,
  enrichSightingsWithCoordinates,
  checkSightingPermission,
  buildSightingLookupMaps
} from "./sighting/helpers.js";

// Controller Functions

export const createSighting = async (req, res) => {
  if (!validateRequest(req, res)) return;

  const { speciesId, locationId, locationName, notes, observedAt, lat, lng } = req.body;
  const files = req.files || [];
  const sightingId = randomUUID();

  try {
    // Upload files to Supabase
    const mediaData = await Promise.all(files.map(file => uploadFileToStorage(file, sightingId)));

    // Run AI classification and location identification in parallel
    const [aiResult, aiLocationResult] = await Promise.all([
      !speciesId && files.length > 0 ? runAIClassification(files[0], lat, lng) : null,
      !locationName && lat && lng ? runAILocationIdentification(lat, lng) : null
    ]);

    // Database Transaction
    const created = await prisma.$transaction(async (tx) => {
      // Resolve species ID
      let finalSpeciesId = speciesId || null;
      if (!finalSpeciesId && aiResult?.scientificName) {
        const species = await findOrCreateSpecies(tx, aiResult, mediaData);
        finalSpeciesId = species.id;
      }

      // Validate species exists if provided
      if (finalSpeciesId) {
        const sp = await tx.species.findUnique({ where: { id: finalSpeciesId } });
        if (!sp) throw new Error("Species not found in DB");
      }

      // Resolve location ID
      const finalLocationId = await findOrCreateLocation(tx, {
        locationId, locationName, lat, lng, aiLocationResult
      });

      // Create sighting
      return tx.sighting.create({
        data: {
          id: sightingId,
          userUid: req.user.uid,
          speciesId: finalSpeciesId,
          locationId: finalLocationId,
          locationName: locationName || aiLocationResult?.locationName || null,
          notes: notes ?? null,
          observedAt: observedAt ? new Date(observedAt) : new Date(),
          status: "PENDING",
          media: {
            create: mediaData.map(m => ({ url: m.url, mimeType: m.mimeType })),
          },
        },
      });
    });

    // Update geometry post-transaction
    await updateSightingGeometry(created.id, lat, lng);

    // Fetch complete sighting with relations
    const sighting = await prisma.sighting.findUnique({
      where: { id: created.id },
      include: SIGHTING_INCLUDE,
    });

    res.status(201).json({ message: "Sighting created", sighting });
  } catch (err) {
    handleError(res, "Failed to create sighting", err);
  }
};

// Pagination fetch
export const getAllSightings = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE);
    const skip = (page - 1) * limit;

    const where = {};
    if (req.query.status) where.status = req.query.status.toUpperCase();
    if (req.query.speciesId) where.speciesId = req.query.speciesId;
    if (req.query.userUid) where.userUid = req.query.userUid;

    const [data, total] = await Promise.all([
      prisma.sighting.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: SIGHTING_INCLUDE,
      }),
      prisma.sighting.count({ where }),
    ]);

    await enrichSightingsWithCoordinates(data);

    res.json({ page, limit, total, data });
  } catch (err) {
    handleError(res, "Failed to fetch sightings", err, 500);
  }
};

// Single sighting
export const getSightingById = async (req, res) => {
  try {
    const { id } = req.params;
    const sighting = await prisma.sighting.findUnique({
      where: { id },
      include: SIGHTING_INCLUDE,
    });

    if (!sighting) {
      return res.status(404).json({ message: "Sighting not found" });
    }

    // Extract coordinates from geom field
    const geoData = await prisma.$queryRaw`
      SELECT ST_X(geom) as longitude, ST_Y(geom) as latitude 
      FROM "Sighting" 
      WHERE id = ${id}
    `;

    if (geoData.length > 0) {
      sighting.latitude = geoData[0].latitude;
      sighting.longitude = geoData[0].longitude;
    }

    res.json(sighting);
  } catch (err) {
    handleError(res, "Failed to fetch sighting", err, 500);
  }
};

// Update
export const updateSighting = async (req, res) => {
  try {
    const { id } = req.params;
    const sighting = await prisma.sighting.findUnique({ where: { id } });

    if (!sighting) {
      return res.status(404).json({ message: "Sighting not found" });
    }

    if (!checkSightingPermission(sighting, req.user)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updated = await prisma.sighting.update({ where: { id }, data: req.body });
    res.json({ message: "Sighting updated", sighting: updated });
  } catch (err) {
    handleError(res, "Failed to update sighting", err);
  }
};

// Delete
export const deleteSighting = async (req, res) => {
  try {
    const { id } = req.params;
    const sighting = await prisma.sighting.findUnique({ where: { id } });

    if (!sighting) {
      return res.status(404).json({ message: "Sighting not found" });
    }

    if (!checkSightingPermission(sighting, req.user)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await prisma.sighting.delete({ where: { id } });
    res.json({ message: "Sighting deleted" });
  } catch (err) {
    handleError(res, "Failed to delete sighting", err);
  }
};

// Expert/Admin verification
export const verifySighting = async (req, res) => {
  try {
    const allowedRoles = ["EXPERT", "ADMIN"];
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const sighting = await prisma.sighting.update({
      where: { id: req.params.id },
      data: { status: "VERIFIED" },
      include: {
        user: true,
        species: true,
        location: true
      }
    });

    res.json({ message: "Sighting verified", sighting });
  } catch (err) {
    handleError(res, "Failed to verify sighting", err);
  }
};

// Admin approve sighting
export const approveSighting = async (req, res) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const { id } = req.params;
    if (!id || id === 'undefined') {
      return res.status(400).json({ message: "Invalid sighting ID" });
    }

    // Check if sighting exists first
    const existingSighting = await prisma.sighting.findUnique({ where: { id } });
    if (!existingSighting) {
      return res.status(404).json({ message: "Sighting not found" });
    }

    const sighting = await prisma.sighting.update({
      where: { id },
      data: { status: "VERIFIED" },
      include: {
        user: true,
        species: true,
        location: true
      }
    });

    res.json({ message: "Sighting approved", sighting });
  } catch (err) {
    handleError(res, "Failed to approve sighting", err);
  }
};

// Admin reject sighting
export const rejectSighting = async (req, res) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const { id } = req.params;
    if (!id || id === 'undefined') {
      return res.status(400).json({ message: "Invalid sighting ID" });
    }

    const { reason } = req.body;

    // Check if sighting exists first
    const existingSighting = await prisma.sighting.findUnique({ where: { id } });
    if (!existingSighting) {
      return res.status(404).json({ message: "Sighting not found" });
    }

    const sighting = await prisma.sighting.update({
      where: { id },
      data: { 
        status: "REJECTED",
        notes: reason ? `REJECTED: ${reason}` : existingSighting.notes 
      },
      include: {
        user: true,
        species: true,
        location: true
      }
    });

    // TODO: Send notification to user
    // You can implement email notification here
    // Example: await sendRejectionEmail(sighting.user.email, sighting, reason);

    res.json({ message: "Sighting rejected", sighting });
  } catch (err) {
    handleError(res, "Failed to reject sighting", err);
  }
};

/**
 * Get nearby sightings within a radius (in meters)
 * Query params: lat, lng, radius (default 5000m = 5km)
 */
export const getNearbySightings = async (req, res) => {
  try {
    const { lat, lng, radius = DEFAULT_RADIUS_METERS } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ message: "lat and lng are required" });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const radiusMeters = parseFloat(radius);

    // Query sightings within radius using PostGIS ST_DWithin
    const nearbySightings = await prisma.$queryRaw`
      SELECT 
        s.id,
        ST_X(s.geom) as longitude,
        ST_Y(s.geom) as latitude,
        ST_Distance(s.geom::geography, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography) as distance_meters
      FROM "Sighting" s
      WHERE s.geom IS NOT NULL
        AND ST_DWithin(
          s.geom::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          ${radiusMeters}
        )
      ORDER BY distance_meters ASC
    `;

    // Fetch full sighting data
    const sightingIds = nearbySightings.map(s => s.id);
    const fullSightings = await prisma.sighting.findMany({
      where: { id: { in: sightingIds } },
      include: SIGHTING_INCLUDE
    });

    // Merge geo data with full sighting data
    const result = nearbySightings.map(geo => {
      const full = fullSightings.find(f => f.id === geo.id);
      return {
        ...full,
        latitude: geo.latitude,
        longitude: geo.longitude,
        distanceMeters: Math.round(geo.distance_meters)
      };
    });

    res.json({
      center: { latitude, longitude },
      radiusMeters,
      total: result.length,
      data: result
    });
  } catch (err) {
    handleError(res, "Failed to fetch nearby sightings", err, 500);
  }
};

/**
 * Get all sightings with full geom data as GeoJSON
 * Useful for mapping all sightings at once
 */
export const getAllSightingsGeoJSON = async (req, res) => {
  try {
    const { status, speciesId } = req.query;

    // Get all sightings with geom, applying filters
    const sightingsWithGeo = await prisma.$queryRaw`
      SELECT 
        s.id,
        s."speciesId",
        s."locationName",
        s.notes,
        s.status,
        s."observedAt",
        ST_X(s.geom) as longitude,
        ST_Y(s.geom) as latitude,
        ST_AsGeoJSON(s.geom) as geojson
      FROM "Sighting" s
      WHERE s.geom IS NOT NULL
        AND (${speciesId}::text IS NULL OR s."speciesId" = ${speciesId})
        AND (${status}::text IS NULL OR s.status::"SightingStatus" = ${status}::"SightingStatus")
      ORDER BY s."createdAt" DESC
    `;

    // Build lookup maps
    const sightingIds = sightingsWithGeo.map(s => s.id);
    const speciesIds = [...new Set(sightingsWithGeo.map(s => s.speciesId).filter(Boolean))];
    const { speciesMap, mediaMap } = await buildSightingLookupMaps(sightingIds, speciesIds);

    // Build GeoJSON FeatureCollection
    const features = sightingsWithGeo.map(s => {
      const media = mediaMap.get(s.id) || [];
      return {
        type: "Feature",
        geometry: s.geojson ? JSON.parse(s.geojson) : null,
        properties: {
          id: s.id,
          speciesId: s.speciesId,
          species: speciesMap.get(s.speciesId) || null,
          locationName: s.locationName,
          notes: s.notes,
          status: s.status,
          observedAt: s.observedAt,
          latitude: s.latitude,
          longitude: s.longitude,
          imageUrl: media.length > 0 ? media[0].url : null,
          media
        }
      };
    });

    res.json({ type: "FeatureCollection", features });
  } catch (err) {
    handleError(res, "Failed to fetch sightings GeoJSON", err, 500);
  }
};

/**
 * Get sightings within a bounding box
 * Query params: minLat, minLng, maxLat, maxLng
 */
export const getSightingsInBounds = async (req, res) => {
  try {
    const { minLat, minLng, maxLat, maxLng } = req.query;

    if (!minLat || !minLng || !maxLat || !maxLng) {
      return res.status(400).json({ message: "minLat, minLng, maxLat, maxLng are required" });
    }

    const sightings = await prisma.$queryRaw`
      SELECT 
        s.id,
        ST_X(s.geom) as longitude,
        ST_Y(s.geom) as latitude
      FROM "Sighting" s
      WHERE s.geom IS NOT NULL
        AND s.geom && ST_MakeEnvelope(
          ${parseFloat(minLng)}, ${parseFloat(minLat)},
          ${parseFloat(maxLng)}, ${parseFloat(maxLat)},
          4326
        )
      ORDER BY s."createdAt" DESC
    `;

    // Fetch full sighting data
    const sightingIds = sightings.map(s => s.id);
    const fullSightings = await prisma.sighting.findMany({
      where: { id: { in: sightingIds } },
      include: SIGHTING_INCLUDE
    });

    const result = sightings.map(geo => {
      const full = fullSightings.find(f => f.id === geo.id);
      return { ...full, latitude: geo.latitude, longitude: geo.longitude };
    });

    res.json({ total: result.length, data: result });
  } catch (err) {
    handleError(res, "Failed to fetch sightings in bounds", err, 500);
  }
};
