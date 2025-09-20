// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrOeau2m-c4DNUOlNYKwiwhbKSkhTHoFo",
  authDomain: "safetour-55da7.firebaseapp.com",
  projectId: "safetour-55da7",
  storageBucket: "safetour-55da7.appspot.com",
  messagingSenderId: "1005045719648",
  appId: "1:1005045719648:web:5b6e7842d2a9c38dad1905"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
