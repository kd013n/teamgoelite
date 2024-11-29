// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUWtHBYciHXckxR7uEWdQ_JQSbfB7B0IQ",
  authDomain: "teamgoelite-cloud.firebaseapp.com",
  projectId: "teamgoelite-cloud",
  storageBucket: "teamgoelite-cloud.firebasestorage.app",
  messagingSenderId: "310251436837",
  appId: "1:310251436837:web:383c03d0668b635709b8cc",
  measurementId: "G-JV3DJS37NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
