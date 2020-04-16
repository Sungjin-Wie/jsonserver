var firebase = require('firebase');
require('firebase/firestore');
var firebaseConfig = {
  apiKey: 'AIzaSyCNL6xpU9cDPSaBV5iZ53OK5yt5EZNYUgo',
  authDomain: 'jsondb9.firebaseapp.com',
  databaseURL: 'https://jsondb9.firebaseio.com',
  projectId: 'jsondb9',
  storageBucket: 'jsondb9.appspot.com',
  messagingSenderId: '374743594125',
  appId: '1:374743594125:web:d2eb1998068c4d81ba9ec4',
  measurementId: 'G-RK0GEKEE7V',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
module.exports = firebaseApp.firestore();
