import { initializeApp } from "firebase/app";
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_DOMAIN,
    projectId: process.env.REACT_APP_API_ID,
    storageBucket: process.env.REACT_APP_API_BUCKET,
    messagingSenderId: process.env.REACT_APP_API_MESSID,
    appId: process.env.REACT_APP_API_APPID
};

const appBase = initializeApp(firebaseConfig);

export default appBase;