import { prisma } from "../prisma/client.js";
import { validationResult } from "express-validator";

/**
 * Create new species (Admin only)
 */
export const createSpecies = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const species = await prisma.species.create({ data: req.body });
    res.status(201).json({ message: "Species created successfully", species });
  } catch (err) {
    res.status(400).json({ message: "Failed to create species", error: err.message });
  }
};

/**
 * Get all species with filtering and search
 * Query params: search, conservationStatus, family, class, speciesType, page, limit
 */
export const getAllSpecies = async (req, res) => {
  try {
    const { 
      search, 
      conservationStatus, 
      family, 
      class: speciesClass,
      speciesType,
      page = 1,
      limit = 100
    } = req.query;

    const where = {};

    // Search filter - searches in scientificName, commonName, and description
    if (search) {
      where.OR = [
        { scientificName: { contains: search, mode: 'insensitive' } },
        { commonName: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Conservation status filter
    if (conservationStatus) {
      where.conservationStatus = { contains: conservationStatus, mode: 'insensitive' };
    }

    // Family filter
    if (family) {
      where.family = { contains: family, mode: 'insensitive' };
    }

    // Class filter
    if (speciesClass) {
      where.class = { contains: speciesClass, mode: 'insensitive' };
    }

    // Species type filter
    if (speciesType) {
      where.speciesType = { contains: speciesType, mode: 'insensitive' };
    }

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const [species, total] = await Promise.all([
      prisma.species.findMany({ 
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: "desc" } 
      }),
      prisma.species.count({ where })
    ]);

    res.status(200).json({
      page: pageNum,
      limit: limitNum,
      total,
      data: species
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch species", error: err.message });
  }
};

/**
 * Get species by ID
 */
export const getSpeciesById = async (req, res) => {
  try {
    const species = await prisma.species.findUnique({ where: { id: req.params.id } });
    if (!species) return res.status(404).json({ message: "Species not found" });
    res.status(200).json(species);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch species", error: err.message });
  }
};

/**
 * Update species (Admin only)
 */
export const updateSpecies = async (req, res) => {
  try {
    const updated = await prisma.species.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json({ message: "Species updated", updated });
  } catch (err) {
    res.status(400).json({ message: "Failed to update species", error: err.message });
  }
};

/**
 * Delete species (Admin only)
 */
export const deleteSpecies = async (req, res) => {
  try {
    await prisma.species.delete({ where: { id: req.params.id } });
    res.status(200).json({ message: "Species deleted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete species", error: err.message });
  }
};
