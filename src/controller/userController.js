import { prisma } from "../prisma/client.js";
import { firebaseAdmin } from "../config/firebase/firebase.js";

/**
 * Get all users (Admin only)
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users", error: err.message });
  }
};

/**
 * Get a single user by ID (Admin only)
 */
export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { uid: req.params.id } });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user", error: err.message });
  }
};

/**
 * Update user info (Admin only)
 */
export const updateUser = async (req, res) => {
  try {
    const updated = await prisma.user.update({
      where: { uid: req.params.id },
      data: req.body,
    });
    res.status(200).json({ message: "User updated", updated });
  } catch (err) {``
    res.status(400).json({ message: "Failed to update user", error: err.message });
  }
};

/**
 * Delete user (Admin only)
 */
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    
    // Delete user from Firebase Authentication first
    try {
      await firebaseAdmin.auth().deleteUser(userId);
      console.log(`Firebase user ${userId} deleted successfully`);
    } catch (firebaseError) {
      console.error("Firebase deletion error:", firebaseError);
      // If user doesn't exist in Firebase, continue with database deletion
      if (firebaseError.code !== 'auth/user-not-found') {
        throw new Error(`Failed to delete user from Firebase: ${firebaseError.message}`);
      }
    }
    
    // Delete user from database
    await prisma.user.delete({ where: { uid: userId } });
    
    res.status(200).json({ message: "User deleted from both Firebase and database" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete user", error: err.message });
  }
};;
