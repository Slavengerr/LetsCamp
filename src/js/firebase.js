import firebase from "firebase";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAzx_y_2qMFOHc1b5wQELcDxn9sH0k1VLk",
  authDomain: "letscamp-4b6c8.firebaseapp.com",
  databaseURL: "https://letscamp-4b6c8.firebaseio.com",
  projectId: "letscamp-4b6c8",
  storageBucket: "letscamp-4b6c8.appspot.com",
  messagingSenderId: "316156135369",
  appId: "1:316156135369:web:e2b97046f91cae2a4d8a18",
  measurementId: "G-PRK8RCB3ZJ"
};

firebase.initializeApp(firebaseConfig);

export let database = firebase.database();
export let auth = firebase.auth();

