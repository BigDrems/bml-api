import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
// Ensure you have GOOGLE_API_KEY in your .env file
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

/**
 * Classify species using Google Gemini API
 * @param {Buffer|String} imageInput - Image buffer or public URL
 * @param {Object} location - Optional: { latitude, longitude }
 */
export async function classifySpecies(imageInput, location = null) {
  try {
    // Use a model that supports vision - gemini-2.5-flash for standard API
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let imageBuffer;
    let mimeType = "image/jpeg";

    if (typeof imageInput === 'string') {
      // It's a URL, fetch it
      const response = await fetch(imageInput);
      if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
      const arrayBuffer = await response.arrayBuffer();
      imageBuffer = Buffer.from(arrayBuffer);
      const contentType = response.headers.get('content-type');
      if (contentType) mimeType = contentType;
    } else {
      // It's a Buffer
      imageBuffer = imageInput;
    }

    // Convert buffer to base64
    const base64Image = imageBuffer.toString('base64');

    let locationContext = "";
    if (location?.latitude && location?.longitude) {
      locationContext = `The image was taken at coordinates: ${location.latitude}, ${location.longitude}.`;
    }

    const prompt = `Identify the species in this image. ${locationContext}
    Return ONLY a valid JSON object (no markdown formatting) with the following structure:
    {
      "label": "Common name",
      "scientificName": "Scientific name",
      "confidence": 0.95,
      "commonName": "Common name",
      "description": "A short description of the species (max 2 sentences)",
      "diet": "Brief description of what the species eats (e.g., Carnivore - feeds on fish and small mammals)",
      "length": "Typical length or size range (e.g., 1.2 - 1.8 meters)",
      "weight": "Typical weight range (e.g., 30 - 50 kg)",
      "lifespan": "Average lifespan (e.g., 10 - 15 years in the wild)",
      "conservationStatus": "IUCN conservation status (e.g., Least Concern, Vulnerable, Endangered, Critically Endangered)",
      "habitat": "Primary habitat type (e.g., Tropical rainforest, Freshwater rivers, Coral reefs, Grasslands)",
      "speciesType": "Type of species (e.g., Bird, Mammal, Reptile, Amphibian, Fish, Insect, Arachnid, Crustacean, Mollusk, Plant, Fungi)",
      "coloration": "Description of colors and patterns (e.g., Brown and white plumage with dark wing tips)",
      "bodyShape": "Body shape description (e.g., Large raptor with broad wings and powerful talons)",
      "distinguishingMarks": "Unique identifying features (e.g., Distinctive shaggy crest and blue-gray eyes)",
      "physicalFeatures": "Notable physical features (e.g., Massive bill, long tail feathers)",
      "tracks": "Track or sign descriptions if applicable (e.g., Large talon marks, prey remains)",
      "vocalizations": "Sound descriptions (e.g., Loud, high-pitched whistles)",
      "elevationRange": "Typical elevation range (e.g., 300-1800 meters)",
      "climate": "Preferred climate conditions (e.g., Humid tropical rainforest climate)",
      "waterRequirements": "Water habitat needs (e.g., Near mountain streams and rivers)",
      "primaryRange": "Geographic range (e.g., Eastern Visayas, Leyte Island, Philippines)",
      "seasonalPresence": "Seasonal behavior (e.g., Year-round resident, Migratory)",
      "rank": "species",
      "taxonomy": {
        "kingdom": "...",
        "phylum": "...",
        "class": "...",
        "order": "...",
        "family": "...",
        "genus": "..."
      }
    }
    
    If you cannot identify it with reasonable confidence, return:
    {
      "label": "Unknown",
      "confidence": 0,
      "scientificName": null,
      "commonName": null,
      "description": null,
      "diet": null,
      "length": null,
      "weight": null,
      "lifespan": null,
      "conservationStatus": null,
      "habitat": null,
      "speciesType": null,
      "coloration": null,
      "bodyShape": null,
      "distinguishingMarks": null,
      "physicalFeatures": null,
      "tracks": null,
      "vocalizations": null,
      "elevationRange": null,
      "climate": null,
      "waterRequirements": null,
      "primaryRange": null,
      "seasonalPresence": null,
      "rank": null,
      "taxonomy": null
    }`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Image,
          mimeType: mimeType
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    // Clean up markdown if present (e.g. ```json ... ```)
    const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch (e) {
      console.error("Failed to parse Gemini response:", text);
      return { 
        label: "Unknown", 
        confidence: 0,
        scientificName: null,
        taxonId: null
      };
    }

    return {
      label: data.label || "Unknown",
      confidence: data.confidence || 0,
      scientificName: data.scientificName,
      commonName: data.commonName,
      description: data.description,
      diet: data.diet,
      length: data.length,
      weight: data.weight,
      lifespan: data.lifespan,
      conservationStatus: data.conservationStatus,
      habitat: data.habitat,
      speciesType: data.speciesType,
      // Identification fields
      coloration: data.coloration,
      bodyShape: data.bodyShape,
      distinguishingMarks: data.distinguishingMarks,
      physicalFeatures: data.physicalFeatures,
      tracks: data.tracks,
      vocalizations: data.vocalizations,
      // Habitat fields
      elevationRange: data.elevationRange,
      climate: data.climate,
      waterRequirements: data.waterRequirements,
      primaryRange: data.primaryRange,
      seasonalPresence: data.seasonalPresence,
      taxonId: null, // Gemini doesn't provide iNaturalist ID
      rank: data.rank,
      allResults: [data]
    };

  } catch (error) {
    console.error('Gemini classification error:', error);
    throw error;
  }
}

/**
 * Identify location name from coordinates using reverse geocoding
 * Uses OpenStreetMap Nominatim API (free, no API key required)
 * @param {number} latitude - Latitude coordinate
 * @param {number} longitude - Longitude coordinate
 * @returns {Object} Location details including name, region, country, and habitat type
 */
export async function identifyLocation(latitude, longitude) {
  try {
    // Use OpenStreetMap Nominatim for accurate reverse geocoding
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&zoom=18`,
      {
        headers: {
          'User-Agent': 'BioMapLeyte/1.0' // Required by Nominatim
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Geocoding failed: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.error) {
      console.warn("Nominatim error:", data.error);
      return {
        locationName: `Location at ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        municipality: null,
        province: null,
        region: null,
        country: null,
        habitatType: null
      };
    }

    const address = data.address || {};
    
    // Log for debugging
    console.log("Reverse geocoding result:", {
      lat: latitude,
      lng: longitude,
      display_name: data.display_name,
      address: address
    });
    
    // Build a specific location name from the most specific available data
    // Priority: specific landmarks > barangay/village > municipality
    const locationName = 
      data.name ||  // Use the place name if available
      address.tourism ||
      address.natural ||
      address.water ||
      address.beach ||
      address.bay ||
      address.village ||  // Barangay level
      address.hamlet ||
      address.neighbourhood ||
      address.suburb ||
      address.town ||
      address.city ||
      `${address.town || address.city || address.municipality || 'Location'} Area`;

    // Determine habitat type based on place type and features
    let habitatType = null;
    const placeType = data.type || '';
    const placeClass = data.class || '';
    
    if (address.water || address.bay || placeType.includes('water') || placeType.includes('bay')) {
      habitatType = 'Marine';
    } else if (address.beach || placeType.includes('beach')) {
      habitatType = 'Coastal';
    } else if (placeType.includes('forest') || placeType.includes('wood')) {
      habitatType = 'Forest';
    } else if (placeType.includes('river') || placeType.includes('stream')) {
      habitatType = 'Freshwater';
    } else if (placeType.includes('wetland') || placeType.includes('marsh')) {
      habitatType = 'Wetland';
    } else if (placeClass === 'natural') {
      habitatType = 'Natural Area';
    } else if (address.village || address.hamlet) {
      habitatType = 'Rural';
    } else if (address.city || address.town) {
      habitatType = 'Urban';
    }

    return {
      locationName: locationName,
      municipality: address.city || address.town || address.municipality || address.village || null,
      province: address.province || address.state || address.county || null,
      region: address.region || address.state_district || null,
      country: address.country || null,
      habitatType: habitatType,
      ecosystemDescription: data.display_name || null,
      isProtectedArea: placeType.includes('protected') || placeType.includes('reserve') || placeType.includes('sanctuary'),
      protectedAreaName: (placeType.includes('protected') || placeType.includes('reserve')) ? locationName : null
    };

  } catch (error) {
    console.error('Reverse geocoding error:', error);
    // Fallback to coordinate-based name
    return {
      locationName: `Location at ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
      municipality: null,
      province: null,
      region: null,
      country: null,
      habitatType: null
    };
  }
}