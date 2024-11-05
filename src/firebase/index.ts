// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQNzu4Uxu8qSjAGfy3fV8DiwhuxUlJ34U",
  authDomain: "auke-1a6a1.firebaseapp.com",
  databaseURL: "https://auke-1a6a1-default-rtdb.firebaseio.com",
  projectId: "auke-1a6a1",
  storageBucket: "auke-1a6a1.appspot.com",
  messagingSenderId: "83214755766",
  appId: "1:83214755766:web:17810c74c13a6652d20317",
  measurementId: "G-EK6LJPG8T9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)