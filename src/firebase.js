import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDY9HayAZLwnGkhQrcfr5cSAnuY8NVURQM",
  authDomain: "fir-e1a35.firebaseapp.com",
  projectId: "fir-e1a35",
  storageBucket: "fir-e1a35.appspot.com",
  messagingSenderId: "157436184665",
  appId: "1:157436184665:web:7607e01668d42d961ec948",
  measurementId: "G-X52J3MM379",
});

const auth = firebase.auth();
export { auth };
