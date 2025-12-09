import express from "express";
import { authenticate } from "../middleware/auth/auth.js";
import { expertOnly, adminOnly } from "../middleware/auth/roles.js";
import { upload } from "../middleware/upload.js";
import {
  createSighting,
  getAllSightings,
  getSightingById,
  updateSighting,
  deleteSighting,
  verifySighting,
  approveSighting,
  rejectSighting,
  getNearbySightings,
  getAllSightingsGeoJSON,
  getSightingsInBounds,
} from "../controller/sightingController.js";

const router = express.Router();

// Public endpoints (no auth required)
router.get("/geojson", getAllSightingsGeoJSON);
router.get("/nearby", getNearbySightings);
router.get("/bounds", getSightingsInBounds);

// All routes below require authentication
router.use(authenticate);

// Protected GET endpoints (list & single)
router.get("/", getAllSightings);
router.get("/:id", getSightingById);

// Create sighting with media upload & AI classification
router.post("/", upload.any(), createSighting);

// Update / Delete sighting (user-owned)
router.put("/:id", updateSighting);
router.delete("/:id", deleteSighting);

// Expert/Admin verification
router.patch("/:id/verify", expertOnly, verifySighting);

// Admin approve/reject
router.patch("/:id/approve", adminOnly, approveSighting);
router.patch("/:id/reject", adminOnly, rejectSighting);

export default router;
