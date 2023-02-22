// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ybYu87whwDM1TeG4FVYEDvOLVdswcRU",
  authDomain: "udemy-javascript-project-85a90.firebaseapp.com",
  projectId: "udemy-javascript-project-85a90",
  storageBucket: "udemy-javascript-project-85a90.appspot.com",
  messagingSenderId: "1063203070704",
  appId: "1:1063203070704:web:f5ec9f344ec59872a55835",
  measurementId: "G-WJHH366S62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const db = app.firestore();