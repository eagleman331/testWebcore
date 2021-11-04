import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { getFunctions, httpsCallable } from "firebase/functions";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCWPGjVR_rJ3vrIg_Pp66le8vd340If84c",
  authDomain: "encoderfortp.firebaseapp.com",
  databaseURL: "https://encoderfortp-default-rtdb.firebaseio.com",
  projectId: "encoderfortp",
  storageBucket: "encoderfortp.appspot.com",
  messagingSenderId: "176910501852",
  appId: "1:176910501852:web:6cb642d98b611e60e4b119",
  measurementId: "G-4FPYY7QWL4"
};
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  const storage = app.storage();




  export { db, auth, storage };

