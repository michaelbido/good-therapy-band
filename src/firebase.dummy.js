import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "****************",
  authDomain: "****************.firebaseapp.com",
  databaseURL: "https://****************.firebaseio.com",
  projectId: "****************",
  storageBucket: "****************.appspot.com",
  messagingSenderId: "****************"
};
firebase.initializeApp(config);

export default firebase;