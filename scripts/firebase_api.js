// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAQVNMUU1Gb7gnwlSyYrtYyWZOVTS3U6_k",
  authDomain: "local-scout.firebaseapp.com",
  projectId: "local-scout",
  storageBucket: "local-scout.appspot.com",
  messagingSenderId: "81379274507",
  appId: "1:81379274507:web:f9c15d01e3642486837c0e",
  measurementId: "G-8JZ1YVQTNR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
