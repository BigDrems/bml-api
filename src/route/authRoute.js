import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Password min 6 chars"),
  body("name").notEmpty().withMessage("Name required"),
  registerUser
);

router.post(
  "/login",
  body("idToken").notEmpty().withMessage("Firebase ID token required"),
  loginUser
);

export default router;
