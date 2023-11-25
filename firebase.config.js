import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCARGxu8PBO29ND9frlenGitDQPZcC-mqs",
  authDomain: "react-authentication-41e9a.firebaseapp.com",
  projectId: "react-authentication-41e9a",
  storageBucket: "react-authentication-41e9a.appspot.com",
  messagingSenderId: "1075177166281",
  appId: "1:1075177166281:web:58b13022066b7315044418",
  measurementId: "G-RN9ES3TXV7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
