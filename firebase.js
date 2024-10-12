// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQWwW3dCglf-6kPQNseCRaHCcXdL2VHb8",
  authDomain: "mood-b9ac4.firebaseapp.com",
  projectId: "mood-b9ac4",
  storageBucket: "mood-b9ac4.appspot.com",
  messagingSenderId: "1091038003368",
  appId: "1:1091038003368:web:0317f2e6fbc2ddf65f429d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);