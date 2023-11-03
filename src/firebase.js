import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDGg2PGUlUk2eBzHVXbQfXi0AC49QQnAE",
  authDomain: "fir-auth-app-94004.firebaseapp.com",
  projectId: "fir-auth-app-94004",
  storageBucket: "fir-auth-app-94004.appspot.com",
  messagingSenderId: "555719627560",
  appId: "1:555719627560:web:dded620a16604f7cb9f61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app, auth};