// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY5oW_uXWyOECfVg5i-RfXVkkXUihZKHI",
  authDomain: "openin-54276.firebaseapp.com",
  projectId: "openin-54276",
  storageBucket: "openin-54276.appspot.com",
  messagingSenderId: "301770432211",
  appId: "1:301770432211:web:cf8ae7ef83dd97eea5fe26",
  measurementId: "G-KBLJ689LKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {app,auth,provider};