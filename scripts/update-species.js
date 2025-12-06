import dotenv from "dotenv";
dotenv.config();

// Must import after dotenv.config() so GOOGLE_API_KEY is available
const { prisma } = await import("../src/prisma/client.js");
const { classifySpecies } = await import("../src/services/aiService.js");

/**
 * Script to update all species with AI-generated fields
 * (habitat, speciesType, diet, length, weight, lifespan, conservationStatus)
 * by re-classifying their associated sighting images
 */
async function updateSpecies() {
  console.log("=".repeat(60));
  console.log("Species Update Script");
  console.log("=".repeat(60));
  console.log("\nFetching all species...\n");

  // Get all species
  const species = await prisma.species.findMany({
    include: {
      sightings: {
        include: {
          media: true
        },
        take: 1 // Only need one sighting with media for classification
      }
    },
    orderBy: { createdAt: "desc" }
  });

  console.log(`Found ${species.length} species to process\n`);

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const sp of species) {
    try {
      console.log(`\n${"─".repeat(50)}`);
      console.log(`Processing: ${sp.commonName || sp.scientificName}`);
      console.log(`  Scientific Name: ${sp.scientificName}`);
      console.log(`  Current habitat: ${sp.habitat || "Not set"}`);
      console.log(`  Current speciesType: ${sp.speciesType || "Not set"}`);

      // Check if species already has all fields populated
      const hasAllFields = sp.habitat && sp.speciesType && sp.diet && 
                           sp.length && sp.weight && sp.lifespan && sp.conservationStatus &&
                           sp.coloration && sp.bodyShape && sp.distinguishingMarks &&
                           sp.physicalFeatures && sp.elevationRange && sp.climate &&
                           sp.primaryRange && sp.seasonalPresence;
      
      if (hasAllFields) {
        console.log(`  ✓ All fields already populated, skipping...`);
        skipped++;
        continue;
      }

      // Find an image to use for classification
      let imageUrl = sp.imageUrl;
      
      if (!imageUrl && sp.sightings.length > 0) {
        const sighting = sp.sightings[0];
        if (sighting.media && sighting.media.length > 0) {
          imageUrl = sighting.media[0].url;
        }
      }

      if (!imageUrl) {
        console.log(`  ⚠ No image available for classification, skipping...`);
        skipped++;
        continue;
      }

      console.log(`  Using image: ${imageUrl.substring(0, 60)}...`);
      console.log(`  Running AI classification...`);

      // Run AI classification on the image
      const aiResult = await classifySpecies(imageUrl);

      if (!aiResult || aiResult.confidence === 0) {
        console.log(`  ⚠ AI could not classify this species`);
        skipped++;
        continue;
      }

      console.log(`  AI Result:`);
      console.log(`    - Identified as: ${aiResult.commonName || aiResult.label}`);
      console.log(`    - Confidence: ${(aiResult.confidence * 100).toFixed(1)}%`);
      console.log(`    - Habitat: ${aiResult.habitat || "N/A"}`);
      console.log(`    - Species Type: ${aiResult.speciesType || "N/A"}`);
      console.log(`    - Coloration: ${aiResult.coloration || "N/A"}`);
      console.log(`    - Primary Range: ${aiResult.primaryRange || "N/A"}`);

      // Update species with new data (only fill in missing fields)
      const updateData = {};
      
      if (!sp.habitat && aiResult.habitat) updateData.habitat = aiResult.habitat;
      if (!sp.speciesType && aiResult.speciesType) updateData.speciesType = aiResult.speciesType;
      if (!sp.diet && aiResult.diet) updateData.diet = aiResult.diet;
      if (!sp.length && aiResult.length) updateData.length = aiResult.length;
      if (!sp.weight && aiResult.weight) updateData.weight = aiResult.weight;
      if (!sp.lifespan && aiResult.lifespan) updateData.lifespan = aiResult.lifespan;
      if (!sp.conservationStatus && aiResult.conservationStatus) updateData.conservationStatus = aiResult.conservationStatus;
      if (!sp.description && aiResult.description) updateData.description = aiResult.description;
      // Identification fields
      if (!sp.coloration && aiResult.coloration) updateData.coloration = aiResult.coloration;
      if (!sp.bodyShape && aiResult.bodyShape) updateData.bodyShape = aiResult.bodyShape;
      if (!sp.distinguishingMarks && aiResult.distinguishingMarks) updateData.distinguishingMarks = aiResult.distinguishingMarks;
      if (!sp.physicalFeatures && aiResult.physicalFeatures) updateData.physicalFeatures = aiResult.physicalFeatures;
      if (!sp.tracks && aiResult.tracks) updateData.tracks = aiResult.tracks;
      if (!sp.vocalizations && aiResult.vocalizations) updateData.vocalizations = aiResult.vocalizations;
      // Habitat fields
      if (!sp.elevationRange && aiResult.elevationRange) updateData.elevationRange = aiResult.elevationRange;
      if (!sp.climate && aiResult.climate) updateData.climate = aiResult.climate;
      if (!sp.waterRequirements && aiResult.waterRequirements) updateData.waterRequirements = aiResult.waterRequirements;
      if (!sp.primaryRange && aiResult.primaryRange) updateData.primaryRange = aiResult.primaryRange;
      if (!sp.seasonalPresence && aiResult.seasonalPresence) updateData.seasonalPresence = aiResult.seasonalPresence;

      if (Object.keys(updateData).length === 0) {
        console.log(`  ✓ No new data to update`);
        skipped++;
        continue;
      }

      console.log(`  Updating ${Object.keys(updateData).length} field(s)...`);

      await prisma.species.update({
        where: { id: sp.id },
        data: updateData
      });

      console.log(`  ✓ Updated successfully!`);
      updated++;

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
      failed++;
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("Summary");
  console.log("=".repeat(60));
  console.log(`  Total species: ${species.length}`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log("=".repeat(60));
}

// Run the script
updateSpecies()
  .then(() => {
    console.log("\nScript completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\nScript failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
