import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo0fX-B8fahuHLjofw6pL0FRM0DZ9AhkY",
  authDomain: "clone-project-2cffb.firebaseapp.com",
  projectId: "clone-project-2cffb",
  storageBucket: "clone-project-2cffb.appspot.com",
  messagingSenderId: "159337894715",
  appId: "1:159337894715:web:e5341064dcd7ba16a89d1e",
  measurementId: "G-XHCD9TC205",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
