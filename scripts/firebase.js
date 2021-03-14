import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQVNMUU1Gb7gnwlSyYrtYyWZOVTS3U6_k",
  authDomain: "local-scout.firebaseapp.com",
  projectId: "local-scout",
  storageBucket: "local-scout.appspot.com",
  messagingSenderId: "81379274507",
  appId: "1:81379274507:web:f9c15d01e3642486837c0e",
  measurementId: "G-8JZ1YVQTNR"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
