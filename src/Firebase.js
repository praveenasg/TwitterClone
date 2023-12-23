// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAQ-jzrgyWNFsqHCOQo4_9QVuuKwX8dAGE",
    authDomain: "twitterclone-1a481.firebaseapp.com",
    databaseURL: "https://twitterclone-1a481-default-rtdb.firebaseio.com",
    projectId: "twitterclone-1a481",
    storageBucket: "twitterclone-1a481.appspot.com",
    messagingSenderId: "145778290354",
    appId: "1:145778290354:web:9097e39cf20c10e8c663ab",
    measurementId: "G-WEBXPZYMXZ"
  };
  

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}
