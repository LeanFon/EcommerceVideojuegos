import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5NqiDuZdTRKRi55xikAoYmQ1-iaLAhdc",
  authDomain: "juegosmaniaecommerce.firebaseapp.com",
  projectId: "juegosmaniaecommerce",
  storageBucket: "juegosmaniaecommerce.appspot.com",
  messagingSenderId: "316094467958",
  appId: "1:316094467958:web:c8897865d0cc2c31bd3457"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
