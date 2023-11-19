// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4000KU8jYn3SyVg1bHmoon0mScY0wAc",
  authDomain: "coderox-a5fa1.firebaseapp.com",
  projectId: "coderox-a5fa1",
  storageBucket: "coderox-a5fa1.appspot.com",
  messagingSenderId: "868021761636",
  appId: "1:868021761636:web:c1bb54d64423d8c3c89171",
  measurementId: "G-GDZ0FE3299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}