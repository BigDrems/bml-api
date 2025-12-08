import admin from "firebase-admin";
import { createRequire } from "module";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serviceAccount;

// For production (Render), use secret file
const secretFilePath = "/etc/secrets/firebase-service-account.json";
if (existsSync(secretFilePath)) {
  const fileContent = readFileSync(secretFilePath, "utf8");
  serviceAccount = JSON.parse(fileContent);
} else if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  // Fallback to environment variable if needed
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
