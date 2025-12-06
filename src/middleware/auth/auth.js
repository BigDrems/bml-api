import { firebaseAdmin } from "../../config/firebase/firebase.js";
import { prisma } from "../../prisma/client.js";

export const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer "))
      return res.status(401).json({ message: "No token provided" });

    const token = header.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = await firebaseAdmin.auth().verifyIdToken(token);

    const user = await prisma.user.upsert({
      where: { uid: decoded.uid },
      create: {
        uid: decoded.uid,
        email: decoded.email,
        name: decoded.name || "Unnamed",
      },
      update: {},
    }); 

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};
