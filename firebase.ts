import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.APIKEY_FIREBASECONFIG,
  authDomain: process.env.AUTH_DOMAIN_FIREBASECONFIG,
  projectId: process.env.PROJECT_ID_FIREBASECONFIG,
  storageBucket: process.env.STORAGE_BUCKET_FIREBASECONFIG,
  messagingSenderId: process.env.MESSAGING_SENDER_ID_CONFIG,
  appId: process.env.APP_ID_CONFIG,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
