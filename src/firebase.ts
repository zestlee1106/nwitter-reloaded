import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpv4_r93laPfbSOUumjPJcsSDgfINzUU4",
  authDomain: "nwitter-reloaded-f77bd.firebaseapp.com",
  projectId: "nwitter-reloaded-f77bd",
  storageBucket: "nwitter-reloaded-f77bd.appspot.com",
  messagingSenderId: "147514274859",
  appId: "1:147514274859:web:e6f427ae0bc4074117e66e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
