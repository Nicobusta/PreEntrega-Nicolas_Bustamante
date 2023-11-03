import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ZxJmfv_XyIS07CRPeTlcLZ8oVHVZXwc",
  authDomain: "creocreo-22c7b.firebaseapp.com",
  projectId: "creocreo-22c7b",
  storageBucket: "creocreo-22c7b.appspot.com",
  messagingSenderId: "97675371568",
  appId: "1:97675371568:web:8262054e5f43bdf8b3b9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
