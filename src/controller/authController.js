import { prisma } from "../prisma/client.js";
import { getAuth } from "firebase-admin/auth";
import { validationResult } from "express-validator";

/**
 * Register a new user
 */
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { email, password, name } = req.body;

    // Create user in Firebase
    const userRecord = await getAuth().createUser({
      email,
      password,
      displayName: name,
      emailVerified: false,
      disabled: false,
    });

    // Prevent duplicate in Prisma
    const existing = await prisma.user.findUnique({ where: { uid: userRecord.uid } });
    if (existing) return res.status(400).json({ message: "User already exists" });

    // Store minimal profile in PostgreSQL
    const user = await prisma.user.create({
      data: { uid: userRecord.uid, email, name },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Registration failed", error: err.message });
  }
};

/**
 * Login user with Firebase ID Token
 */
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { idToken } = req.body;

    // Verify Firebase ID Token
    let decoded;
    try {
      decoded = await getAuth().verifyIdToken(idToken, true);
    } catch (firebaseErr) {
      console.error("Firebase token verification error:", firebaseErr);
      return res.status(401).json({ 
        message: "Invalid or expired token", 
        error: firebaseErr.message 
      });
    }

    // Check if user exists in DB
    const user = await prisma.user.findUnique({ where: { uid: decoded.uid } });
    if (!user) return res.status(404).json({ message: "User not found in database" });

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
