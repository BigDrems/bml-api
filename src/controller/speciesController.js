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
 * Get all species
 */
export const getAllSpecies = async (req, res) => {
  try {
    const species = await prisma.species.findMany({ orderBy: { createdAt: "desc" } });
    res.status(200).json(species);
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
