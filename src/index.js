import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0JS7gaSL1TvRht4vut3TVbQkAJgqBAwA",
  authDomain: "chuelmo-coder-react-37750.firebaseapp.com",
  projectId: "chuelmo-coder-react-37750",
  storageBucket: "chuelmo-coder-react-37750.appspot.com",
  messagingSenderId: "813107678597",
  appId: "1:813107678597:web:c3be1ef2d160794f1a08ec"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
