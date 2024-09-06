import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-3_SRQTf3jr_vmOX-R15w93mkgc7_HsQ",
  authDomain: "devsdream-3f8b5.firebaseapp.com",
  projectId: "devsdream-3f8b5",
  storageBucket: "devsdream-3f8b5.appspot.com",
  messagingSenderId: "377116464482",
  appId: "1:377116464482:web:1079035113e32173ea083b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// const imageUpload = getStorage(app);

export { db };
