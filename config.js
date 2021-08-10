import firebase from "firebase";
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyAGPh-ADoR0UevUx8Y-y6M5gFpFE2wMQOE",
  authDomain: "expiree-e22e6.firebaseapp.com",
  projectId: "expiree-e22e6",
  storageBucket: "expiree-e22e6.appspot.com",
  messagingSenderId: "531920236585",
  appId: "1:531920236585:web:2ab1583e7ef39bb08aac38"
  };

  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore();