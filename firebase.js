// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbCln5nFdUbLPgQlqQrrVQXjUL5rCRVBE",
  authDomain: "skill-school-b799b.firebaseapp.com",
  projectId: "skill-school-b799b",
  storageBucket: "skill-school-b799b.firebasestorage.app",
  messagingSenderId: "602013719813",
  appId: "1:602013719813:web:cc5e9e175cc20b6b976b6c",
  measurementId: "G-6Z60NB2F01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const db = getFirestore(app)

export default db;