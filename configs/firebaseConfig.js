// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-8ffa4.firebaseapp.com",
  projectId: "car-marketplace-8ffa4",
  storageBucket: "car-marketplace-8ffa4.appspot.com",
  messagingSenderId: "123961058102",
  appId: "1:123961058102:web:36fb5166b32be243b1c997",
  measurementId: "G-MTYX4QWTJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);