import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    databaseURL:process.env.REACT_APP_databaseURL,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
    measurementId:process.env.REACT_APP_measurementId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
   const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { projectStorage,projectFirestore,timestamp};
  