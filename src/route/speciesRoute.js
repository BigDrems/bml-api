import express from "express";
import { body } from "express-validator";
import { authenticate } from "../middleware/auth/auth.js";
import { adminOnly } from "../middleware/auth/roles.js";
import {
  createSpecies,
  getAllSpecies,
  getSpeciesById,
  updateSpecies,
  deleteSpecies,
} from "../controller/speciesController.js";

const router = express.Router();

router.get("/", getAllSpecies);
router.get("/:id", getSpeciesById);

// Protected routes
router.post(
  "/",
  authenticate,
  adminOnly,
  body("scientificName").notEmpty().withMessage("Scientific name required"),
  createSpecies
);
router.put("/:id", authenticate, adminOnly, updateSpecies);
router.delete("/:id", authenticate, adminOnly, deleteSpecies);

export default router;
