import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCMQSeZX0UKqi5EkmK3X60aqCsVK6lNhCM",
    authDomain: "fir-firestore-demo-76f56.firebaseapp.com",
    databaseURL: "https://fir-firestore-demo-76f56.firebaseio.com",
    projectId: "fir-firestore-demo-76f56",
    storageBucket: "fir-firestore-demo-76f56.appspot.com",
    messagingSenderId: "13197049093",
    appId: "1:13197049093:web:de62ad94d5538fb8564b6c",
    measurementId: "G-MPG05ZPFS4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
   const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { projectStorage,projectFirestore,timestamp};
  