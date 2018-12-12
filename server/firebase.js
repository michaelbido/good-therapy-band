const firebase = require('firebase');
const { fb } = require('../variables');

// Initialize Firebase
var config = {
  apiKey: fb.apiKey,
  authDomain: fb.authDomain,
  databaseURL: fb.databaseURL,
  projectId: fb.projectId,
  storageBucket: fb.storageBucket,
  messagingSenderId: fb.messagingSenderId
};
firebase.initializeApp(config);

module.exports.firebase = firebase;