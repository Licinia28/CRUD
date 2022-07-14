// Import the functions 
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIIzEyMQaKocdtKrqv-f1XBVe5d-XQ4ac",
  authDomain: "empapp-d7dbc.firebaseapp.com",
  projectId: "empapp-d7dbc",
  storageBucket: "empapp-d7dbc.appspot.com",
  messagingSenderId: "407130105381",
  appId: "1:407130105381:web:8b914229d8801a40e441cc",
  measurementId: "G-057NJR1JM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);