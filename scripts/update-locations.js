import dotenv from "dotenv";
dotenv.config();

import { prisma } from "../src/prisma/client.js";
import { identifyLocation } from "../src/services/aiService.js";

/**
 * Script to update all sightings with accurate location names
 * based on their geom coordinates using reverse geocoding
 */
async function updateLocations() {
  console.log("Fetching all sightings with coordinates...");

  // Get all sightings with geom data
  const sightings = await prisma.$queryRaw`
    SELECT 
      id,
      "locationId",
      "locationName",
      ST_Y(geom) as latitude,
      ST_X(geom) as longitude
    FROM "Sighting"
    WHERE geom IS NOT NULL
  `;

  console.log(`Found ${sightings.length} sightings with coordinates`);

  for (const sighting of sightings) {
    try {
      console.log(`\nProcessing sighting ${sighting.id}...`);
      console.log(`  Current location: ${sighting.locationName}`);
      console.log(`  Coordinates: ${sighting.latitude}, ${sighting.longitude}`);

      // Get accurate location from reverse geocoding
      const locationData = await identifyLocation(sighting.latitude, sighting.longitude);
      
      console.log(`  New location: ${locationData.locationName}`);
      console.log(`  Municipality: ${locationData.municipality}`);
      console.log(`  Province: ${locationData.province}`);

      // Update or create the Location record
      let location;
      if (sighting.locationId) {
        location = await prisma.location.update({
          where: { id: sighting.locationId },
          data: {
            name: locationData.locationName,
            municipality: locationData.municipality,
            province: locationData.province,
            region: locationData.region,
            country: locationData.country,
            habitatType: locationData.habitatType,
            latitude: sighting.latitude,
            longitude: sighting.longitude,
          }
        });
      } else {
        location = await prisma.location.create({
          data: {
            name: locationData.locationName,
            municipality: locationData.municipality,
            province: locationData.province,
            region: locationData.region,
            country: locationData.country,
            habitatType: locationData.habitatType,
            latitude: sighting.latitude,
            longitude: sighting.longitude,
          }
        });
      }

      // Update the sighting's locationName and locationId
      await prisma.sighting.update({
        where: { id: sighting.id },
        data: {
          locationName: locationData.locationName,
          locationId: location.id
        }
      });

      console.log(`  ✓ Updated successfully!`);

      // Rate limit to avoid hitting Nominatim API limits (1 request/second)
      await new Promise(resolve => setTimeout(resolve, 1100));

    } catch (error) {
      console.error(`  ✗ Error updating sighting ${sighting.id}:`, error.message);
    }
  }

  console.log("\n✓ All locations updated!");
  await prisma.$disconnect();
}

updateLocations().catch(console.error);
