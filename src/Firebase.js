// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHc280ARCbsORjBaAcszoGf5v-fuHvaog",
  authDomain: "shopping-8f04f.firebaseapp.com",
  projectId: "shopping-8f04f",
  storageBucket: "shopping-8f04f.firebasestorage.app",
  messagingSenderId: "839548780244",
  appId: "1:839548780244:web:56d80537bf0a49c27ec541",
  measurementId: "G-FRJKLZ6MRC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();