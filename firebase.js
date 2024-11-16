// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcKBi55P8D9B1UcRP8rt_rhzu41ukiSpg",
  authDomain: "student-details-management-b8.firebaseapp.com",
  projectId: "student-details-management-b8",
  storageBucket: "student-details-management-b8.firebasestorage.app",
  messagingSenderId: "743560052295",
  appId: "1:743560052295:web:f5936a7254c2379e9d7b62",
  measurementId: "G-M7EP16HN55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Auth
export const googleProvider = new GoogleAuthProvider();

export { db, auth };
