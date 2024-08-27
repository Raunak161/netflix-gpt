// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEK1kJJF7H6sXA7i5-JHjyBr6vZ0f7s6g",
  authDomain: "netflix-gpt-8ad46.firebaseapp.com",
  projectId: "netflix-gpt-8ad46",
  storageBucket: "netflix-gpt-8ad46.appspot.com",
  messagingSenderId: "380354656508",
  appId: "1:380354656508:web:16c3ab331152bafe097f79",
  measurementId: "G-PT31HF3957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);