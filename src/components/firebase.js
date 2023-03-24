// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyBs0T8b3jqijwX83w5NQth04EPFPRt8kBU",
  authDomain: "react-authentication-f712e.firebaseapp.com",
  projectId: "react-authentication-f712e",
  storageBucket: "react-authentication-f712e.appspot.com",
  messagingSenderId: "834501878336",
  appId: "1:834501878336:web:fdf56584e2cb090f0eb5a5",
  measurementId: "G-86QD4QRSRR",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;

