
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDXmBMAWrOk5eo8FVLRlCVJsO9uODn6hL4",
  authDomain: "tiktok---jornada-c8f8e.firebaseapp.com",
  projectId: "tiktok---jornada-c8f8e",
  storageBucket: "tiktok---jornada-c8f8e.appspot.com",
  messagingSenderId: "503918181595",
  appId: "1:503918181595:web:1d7138e42f5c4bbadfa0fe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;