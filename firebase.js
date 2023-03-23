import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACJSN78tIC69AZDsnIG9IFPXkYQkVnPCo",
  authDomain: "realestatenft-9c03c.firebaseapp.com",
  projectId: "realestatenft-9c03c",
  storageBucket: "realestatenft-9c03c.appspot.com",
  messagingSenderId: "233988132397",
  appId: "1:233988132397:web:065d5c37c3505b481ab2a4"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app)

console.log("Hello there firestore")