import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBFOM47jMhrzovovxrVTKK2rpIqXATreBE",
  authDomain: "linkedin-clone-99d43.firebaseapp.com",
  projectId: "linkedin-clone-99d43",
  storageBucket: "linkedin-clone-99d43.appspot.com",
  messagingSenderId: "390131765769",
  appId: "1:390131765769:web:18f4de0fbe0ba9cfd9ded8",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
