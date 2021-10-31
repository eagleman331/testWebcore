import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { getFunctions, httpsCallable } from "firebase/functions";
import { initializeApp } from 'firebase/app';

const firebaseConfig = ({
  apiKey: "AIzaSyAHxxl_FNdi8Wi_olok46-jUSZyaUSyfQM",
  authDomain: "campid-f8c50.firebaseapp.com",
  databaseURL: "https://campid-f8c50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campid-f8c50",
  storageBucket: "campid-f8c50.appspot.com",
  messagingSenderId: "804204225080",
  appId: "1:804204225080:web:665b34de67ec1a8be0fccd",
  measurementId: "G-60NECDVYT5"
} );
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  const storage = app.storage();

// function
const otherAppConfig = ({
  projectId: 'campid-f8c50',
  apiKey: 'AIzaSyAHxxl_FNdi8Wi_olok46-jUSZyaUSyfQM',
  authDomain: "campid-f8c50.firebaseapp.com",
});

var otherApp = firebase.initializeApp(otherAppConfig, "other");
const functions = getFunctions(otherApp);
const addMessage = httpsCallable(functions, 'addMessage2');


  export { db, auth, storage };
  export default addMessage;
