// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyS8oKA99KQCxG6nVAkwF7Qtqxa5YbDdo",
  authDomain: "vite-contact-c036a.firebaseapp.com",
  projectId: "vite-contact-c036a",
  storageBucket: "vite-contact-c036a.firebasestorage.app",
  messagingSenderId: "52327114430",
  appId: "1:52327114430:web:2765bb8016283d0acc20ef",
  measurementId: "G-L80LD8ELGF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);