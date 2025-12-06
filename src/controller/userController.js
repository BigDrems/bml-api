import { prisma } from "../prisma/client.js";

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
    await prisma.user.delete({ where: { uid: req.params.id } });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete user", error: err.message });
  }
};
