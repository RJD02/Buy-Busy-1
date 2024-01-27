import { Auth, GoogleAuthProvider } from "firebase/auth";

interface Config {
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGE_SENDER_ID: string;
  FIREBASE_APP_ID: string;
  auth: Auth | null;
  googleAuthProvider: GoogleAuthProvider | null;
}

export const config: Config = {
  FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGE_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  auth: null,
  googleAuthProvider: null,
};
