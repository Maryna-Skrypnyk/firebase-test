import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA6DAcraGzfyMxNMjxfR8ICTnI0RqA81fA",
  authDomain: "ms-project-tt.firebaseapp.com",
  projectId: "ms-project-tt",
  storageBucket: "ms-project-tt.appspot.com",
  messagingSenderId: "681535676656",
  appId: "1:681535676656:web:ed10240d4f8ec8598e6235",
  measurementId: "G-HC1SCW3LDJ",
};

firebase.initializeApp(config);

export default firebase;
