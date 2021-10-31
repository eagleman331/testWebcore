
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from "firebase/functions";


const app = initializeApp({
  projectId: 'campid-f8c50',
  apiKey: 'AIzaSyAHxxl_FNdi8Wi_olok46-jUSZyaUSyfQM',
  authDomain: "campid-f8c50.firebaseapp.com",
});
const functions = getFunctions(app);
const addMessage = httpsCallable(functions, 'addMessage2');

export default addMessage


