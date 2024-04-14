// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl9bO9mL91x9mO_RaRC-fDMJWpUUP9UAY",
  authDomain: "netflixgpt-64fff.firebaseapp.com",
  projectId: "netflixgpt-64fff",
  storageBucket: "netflixgpt-64fff.appspot.com",
  messagingSenderId: "619628903317",
  appId: "1:619628903317:web:21966391e017880697549c",
  measurementId: "G-LXKY2W91P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()