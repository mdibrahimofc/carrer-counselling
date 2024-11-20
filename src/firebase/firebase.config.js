// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrn3qdCo2K2wT7TDz1rQ7Ugr5-BcRbLvc",
  authDomain: "carrer-counselling-c1f6f.firebaseapp.com",
  projectId: "carrer-counselling-c1f6f",
  storageBucket: "carrer-counselling-c1f6f.firebasestorage.app",
  messagingSenderId: "998755652725",
  appId: "1:998755652725:web:11ec99cc85f3c88521143c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)