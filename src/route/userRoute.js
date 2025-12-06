import express from "express";
import { authenticate } from "../middleware/auth/auth.js";
import { adminOnly } from "../middleware/auth/roles.js";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controller/userController.js";

const router = express.Router();

router.use(authenticate);

// Admin-only routes
router.get("/", adminOnly, getAllUsers);
router.get("/:id", adminOnly, getUserById);
router.put("/:id", adminOnly, updateUser);
router.delete("/:id", adminOnly, deleteUser);

export default router;
