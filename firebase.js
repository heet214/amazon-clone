import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0x2YIKKqBgokLQMp5IqlwL3Z2hHz1nKs",
  authDomain: "challange-d2b89.firebaseapp.com",
  databaseURL: "https://challange-d2b89.firebaseio.com",
  projectId: "challange-d2b89",
  storageBucket: "challange-d2b89.appspot.com",
  messagingSenderId: "191623107189",
  appId: "1:191623107189:web:a59cd55cd33976c6a91e3c",
  measurementId: "G-E4QLY67B29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
