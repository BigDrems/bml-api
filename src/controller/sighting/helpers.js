import { prisma } from "../../prisma/client.js";
import { supabase } from "../../config/supabase/supabase.js";
import { validationResult } from "express-validator";
import { classifySpecies, identifyLocation } from "../../services/aiService.js";

// ============================================================================
// Validation & Error Handling
// ============================================================================

/**
 * Validates request and returns errors if any
 */
export const validateRequest = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return false;
  }
  return true;
};

/**
 * Standard error response handler
 */
export const handleError = (res, message, error, statusCode = 400) => {
  console.error(`${message}:`, error);
  res.status(statusCode).json({ message, error: error.message });
};

// ============================================================================
// File Upload
// ============================================================================

/**
 * Upload a single file to Supabase storage
 */
export const uploadFileToStorage = async (file, sightingId) => {
  const filePath = `${sightingId}/${Date.now()}-${file.originalname}`;
  const { data, error } = await supabase.storage
    .from("sightings-media")
    .upload(filePath, file.buffer, { contentType: file.mimetype, upsert: true });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from("sightings-media")
    .getPublicUrl(data.path);

  return { sightingId, url: publicUrl, mimeType: file.mimetype };
};

// ============================================================================
// AI Services
// ============================================================================

/**
 * Run AI classification on uploaded image
 */
export const runAIClassification = async (file, lat, lng) => {
  try {
    return await classifySpecies(file.buffer, { latitude: lat, longitude: lng });
  } catch (err) {
    console.warn("AI classification failed:", err.message);
    return null;
  }
};

/**
 * Run AI location identification from coordinates
 */
export const runAILocationIdentification = async (lat, lng) => {
  try {
    console.log(`Identifying location for coordinates: ${lat}, ${lng}`);
    const result = await identifyLocation(parseFloat(lat), parseFloat(lng));
    console.log(`Location identified: ${result?.locationName}`);
    return result;
  } catch (err) {
    console.warn("AI location identification failed:", err.message);
    return null;
  }
};

// ============================================================================
// Species Helpers
// ============================================================================

/**
 * Find or create species based on AI result
 */
export const findOrCreateSpecies = async (tx, aiResult, mediaData) => {
  let species = await tx.species.findFirst({
    where: { scientificName: aiResult.scientificName }
  });

  const imageUrl = mediaData.length > 0 ? mediaData[0].url : null;

  if (!species) {
    return tx.species.create({
      data: {
        scientificName: aiResult.scientificName,
        commonName: aiResult.commonName || aiResult.label,
        description: aiResult.description || `Automatically identified by AI (Confidence: ${(aiResult.confidence * 100).toFixed(1)}%)`,
        imageUrl,
        diet: aiResult.diet || null,
        length: aiResult.length || null,
        weight: aiResult.weight || null,
        lifespan: aiResult.lifespan || null,
        conservationStatus: aiResult.conservationStatus || null,
        habitat: aiResult.habitat || null,
        speciesType: aiResult.speciesType || null,
        // Identification fields
        coloration: aiResult.coloration || null,
        bodyShape: aiResult.bodyShape || null,
        distinguishingMarks: aiResult.distinguishingMarks || null,
        physicalFeatures: aiResult.physicalFeatures || null,
        tracks: aiResult.tracks || null,
        vocalizations: aiResult.vocalizations || null,
        // Habitat fields
        elevationRange: aiResult.elevationRange || null,
        climate: aiResult.climate || null,
        waterRequirements: aiResult.waterRequirements || null,
        primaryRange: aiResult.primaryRange || null,
        seasonalPresence: aiResult.seasonalPresence || null
      }
    });
  }

  // Update existing species if missing AI-generated fields
  const needsUpdate = !species.diet || !species.length || !species.weight || !species.lifespan || 
    !species.conservationStatus || !species.habitat || !species.speciesType ||
    !species.coloration || !species.bodyShape || !species.distinguishingMarks ||
    !species.physicalFeatures || !species.elevationRange || !species.climate ||
    !species.primaryRange || !species.seasonalPresence;
    
  if (needsUpdate) {
    return tx.species.update({
      where: { id: species.id },
      data: {
        diet: species.diet || aiResult.diet || null,
        length: species.length || aiResult.length || null,
        weight: species.weight || aiResult.weight || null,
        lifespan: species.lifespan || aiResult.lifespan || null,
        conservationStatus: species.conservationStatus || aiResult.conservationStatus || null,
        habitat: species.habitat || aiResult.habitat || null,
        speciesType: species.speciesType || aiResult.speciesType || null,
        // Identification fields
        coloration: species.coloration || aiResult.coloration || null,
        bodyShape: species.bodyShape || aiResult.bodyShape || null,
        distinguishingMarks: species.distinguishingMarks || aiResult.distinguishingMarks || null,
        physicalFeatures: species.physicalFeatures || aiResult.physicalFeatures || null,
        tracks: species.tracks || aiResult.tracks || null,
        vocalizations: species.vocalizations || aiResult.vocalizations || null,
        // Habitat fields
        elevationRange: species.elevationRange || aiResult.elevationRange || null,
        climate: species.climate || aiResult.climate || null,
        waterRequirements: species.waterRequirements || aiResult.waterRequirements || null,
        primaryRange: species.primaryRange || aiResult.primaryRange || null,
        seasonalPresence: species.seasonalPresence || aiResult.seasonalPresence || null,
        imageUrl: species.imageUrl || imageUrl
      }
    });
  }

  return species;
};

// ============================================================================
// Location Helpers
// ============================================================================

/**
 * Build location data object from AI result
 */
export const buildLocationData = (aiLocationResult) => ({
  municipality: aiLocationResult.municipality,
  province: aiLocationResult.province,
  region: aiLocationResult.region,
  country: aiLocationResult.country,
  habitatType: aiLocationResult.habitatType,
});

/**
 * Find or create location based on provided data and AI result
 */
export const findOrCreateLocation = async (tx, { locationId, locationName, lat, lng, aiLocationResult }) => {
  if (locationId) {
    const loc = await tx.location.findUnique({ where: { id: locationId } });
    if (!loc) throw new Error("Provided locationId not found");
    return loc.id;
  }

  if (!locationName && !aiLocationResult && !lat && !lng) {
    return null;
  }

  const locName = locationName || aiLocationResult?.locationName || "Custom Location";
  let location = await tx.location.findFirst({ where: { name: locName } });

  const coordinates = {
    latitude: lat ? parseFloat(lat) : undefined,
    longitude: lng ? parseFloat(lng) : undefined
  };

  if (location) {
    const updateData = { ...coordinates };
    if (aiLocationResult) {
      const aiData = buildLocationData(aiLocationResult);
      Object.entries(aiData).forEach(([key, value]) => {
        if (!location[key] && value) updateData[key] = value;
      });
    }
    location = await tx.location.update({ where: { id: location.id }, data: updateData });
  } else {
    location = await tx.location.create({
      data: {
        name: locName,
        latitude: coordinates.latitude || null,
        longitude: coordinates.longitude || null,
        ...(aiLocationResult && buildLocationData(aiLocationResult))
      }
    });
  }

  return location.id;
};

// ============================================================================
// Geometry Helpers
// ============================================================================

/**
 * Update sighting geometry with PostGIS
 */
export const updateSightingGeometry = async (sightingId, lat, lng) => {
  if (!lat || !lng) return;
  await prisma.$executeRaw`
    UPDATE "Sighting" 
    SET geom = ST_SetSRID(ST_MakePoint(${parseFloat(lng)}, ${parseFloat(lat)}), 4326) 
    WHERE id = ${sightingId}
  `;
};

/**
 * Fetch coordinates from geom field for multiple sightings
 */
export const fetchSightingCoordinates = async (sightingIds) => {
  if (sightingIds.length === 0) return new Map();
  
  const geoData = await prisma.$queryRaw`
    SELECT id, ST_X(geom) as longitude, ST_Y(geom) as latitude 
    FROM "Sighting" 
    WHERE id = ANY(${sightingIds})
  `;
  
  return new Map(geoData.map(g => [g.id, { latitude: g.latitude, longitude: g.longitude }]));
};

/**
 * Enrich sightings with coordinate data
 */
export const enrichSightingsWithCoordinates = async (sightings) => {
  const coordsMap = await fetchSightingCoordinates(sightings.map(s => s.id));
  sightings.forEach(s => {
    const coords = coordsMap.get(s.id);
    s.latitude = coords?.latitude || null;
    s.longitude = coords?.longitude || null;
  });
  return sightings;
};

// ============================================================================
// Authorization Helpers
// ============================================================================

/**
 * Check if user has permission to modify a sighting
 */
export const checkSightingPermission = (sighting, user) => {
  return sighting.userUid === user.uid || user.role === "ADMIN";
};

// ============================================================================
// Data Lookup Helpers
// ============================================================================

/**
 * Build media and species lookup maps for sightings
 */
export const buildSightingLookupMaps = async (sightingIds, speciesIds) => {
  const [speciesList, mediaList] = await Promise.all([
    prisma.species.findMany({ where: { id: { in: speciesIds } } }),
    prisma.media.findMany({ where: { sightingId: { in: sightingIds } } })
  ]);

  const speciesMap = new Map(speciesList.map(sp => [sp.id, sp]));
  
  const mediaMap = new Map();
  mediaList.forEach(m => {
    if (!mediaMap.has(m.sightingId)) {
      mediaMap.set(m.sightingId, []);
    }
    mediaMap.get(m.sightingId).push(m);
  });

  return { speciesMap, mediaMap };
};
