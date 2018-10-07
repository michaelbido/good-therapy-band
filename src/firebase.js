import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdxxqXy3RlinV8AXzsSxfpdL-Cg3rY73w",
  authDomain: "goodtherapybanddata.firebaseapp.com",
  databaseURL: "https://goodtherapybanddata.firebaseio.com",
  projectId: "goodtherapybanddata",
  storageBucket: "goodtherapybanddata.appspot.com",
  messagingSenderId: "295931546945"
};
firebase.initializeApp(config);

export default firebase;