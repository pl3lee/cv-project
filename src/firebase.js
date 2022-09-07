import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "cv-project-428cf.firebaseapp.com",
  projectId: "cv-project-428cf",
  storageBucket: "cv-project-428cf.appspot.com",
  messagingSenderId: "883351509474",
  appId: "1:883351509474:web:aacd27e1722f96600541bb",
  measurementId: "G-ZW93BFT3D4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
