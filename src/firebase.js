import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6xZNM2Wzyj62cbJia_EOji7ZQKEt6Xqg",
  authDomain: "clone-7995f.firebaseapp.com",
  projectId: "clone-7995f",
  storageBucket: "clone-7995f.appspot.com",
  messagingSenderId: "288842004506",
  appId: "1:288842004506:web:28100ee56aa7628a5b39a3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };