import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7ZxJmfv_XyIS07CRPeTlcLZ8oVHVZXwc",
  authDomain: "creocreo-22c7b.firebaseapp.com",
  projectId: "creocreo-22c7b",
  storageBucket: "creocreo-22c7b.appspot.com",
  messagingSenderId: "97675371568",
  appId: "1:97675371568:web:8262054e5f43bdf8b3b9f5"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
