import firebase from 'firebase/compat/app';
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from "firebase/functions";

const otherAppConfig = ({
  projectId: 'campid-f8c50',
  apiKey: 'AIzaSyAHxxl_FNdi8Wi_olok46-jUSZyaUSyfQM',
  authDomain: "campid-f8c50.firebaseapp.com",
});

var otherApp = firebase.initializeApp(otherAppConfig, "other");
const functions = getFunctions(otherApp);
const addMessage = httpsCallable(functions, 'addMessage2');

const addAdminRole = httpsCallable(functions, 'addAdminRole');


export default addMessage

