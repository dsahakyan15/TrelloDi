// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCQNNqAaB1HHr3jTNJSCg3iZcWWhUlTVo",
    authDomain: "trellodi-2fc3f.firebaseapp.com",
    projectId: "trellodi-2fc3f",
    storageBucket: "trellodi-2fc3f.appspot.com",
    messagingSenderId: "470836121604",
    appId: "1:470836121604:web:ad25349251682af40ea551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export { auth, app, db }