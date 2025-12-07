import admin from "firebase-admin";
import { createRequire } from "module";

let serviceAccount;

// For production (Render), use environment variable
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  // For local development, use JSON file
  const require = createRequire(import.meta.url);
  serviceAccount = require("../firebase/biomap-leyte-firebase-adminsdk-fbsvc-2594ce8065.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firebaseAdmin = admin;
