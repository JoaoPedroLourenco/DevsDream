import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA47mSxPX8aRrxTHUvI6-QPa1EeT-FU3Nw",
  authDomain: "uninetwork-10651.firebaseapp.com",
  projectId: "uninetwork-10651",
  storageBucket: "uninetwork-10651.appspot.com",
  messagingSenderId: "711363652465",
  appId: "1:711363652465:web:4e78d32c18ffcdc8efe4d0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// const imageUpload = getStorage(app);

export { db, storage };
