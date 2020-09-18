const admin = require("firebase-admin");
const firebase = require('firebase');

const serviceAccount = require("./segundoparcial-f1ec4-firebase-adminsdk-qp2fe-f3063fc636.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://segundoparcial-f1ec4.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyBN45lTXqg4fSGvarBBu4WvaegYBYnyax8",
  authDomain: "segundoparcial-f1ec4.firebaseapp.com",
  databaseURL: "https://segundoparcial-f1ec4.firebaseio.com",
  projectId: "segundoparcial-f1ec4",
  storageBucket: "segundoparcial-f1ec4.appspot.com",
  messagingSenderId: "570162963725",
  appId: "1:570162963725:web:1c7e932812b0dbdaf97c44"
};

firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase};