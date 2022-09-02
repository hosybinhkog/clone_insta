import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4INIztpI3DnPK-ZAoisRC_FWifTtsQ6s",
  authDomain: "instagram-clone-8bf24.firebaseapp.com",
  projectId: "instagram-clone-8bf24",
  storageBucket: "instagram-clone-8bf24.appspot.com",
  messagingSenderId: "569373281930",
  appId: "1:569373281930:web:d4d27ff1ff81a93ddb2773",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
