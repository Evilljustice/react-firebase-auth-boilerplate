// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClCWhko5AZ5TcU4COoM28T6n0mrTdq-Jo",
  authDomain: "pruebaauth-1f917.firebaseapp.com",
  projectId: "pruebaauth-1f917",
  storageBucket: "pruebaauth-1f917.appspot.com",
  messagingSenderId: "369420979642",
  appId: "1:369420979642:web:1684ca665d71b5de416183",
  measurementId: "G-L20RE8N5WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app,auth };