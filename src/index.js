import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
import { useEffect } from 'react'



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




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

export default addMessage