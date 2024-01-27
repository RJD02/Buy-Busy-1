import { initializeApp } from "firebase/app";
import {
  Firestore,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { config } from "../config/config";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,

  authDomain: config.FIREBASE_AUTH_DOMAIN,

  projectId: config.FIREBASE_PROJECT_ID,

  storageBucket: config.FIREBASE_STORAGE_BUCKET,

  messagingSenderId: config.FIREBASE_MESSAGE_SENDER_ID,

  appId: config.FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
config.auth = getAuth();
config.auth?.useDeviceLanguage();

export const db = getFirestore(app);

export const getUsers = async (db: Firestore) => {
  const users = collection(db, "users");
  const docs = await getDocs(users);
  const usersList = docs.docs.map((doc) => doc.data());
  return usersList;
};
