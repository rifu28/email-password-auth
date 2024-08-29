// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW5eecl7tSlDWWvlyPZL4xsejFEZ6Cxps",
  authDomain: "email-password-auth-b81ba.firebaseapp.com",
  projectId: "email-password-auth-b81ba",
  storageBucket: "email-password-auth-b81ba.appspot.com",
  messagingSenderId: "904243831477",
  appId: "1:904243831477:web:a7a2bc637a4c1add2654fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
