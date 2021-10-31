import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHxxl_FNdi8Wi_olok46-jUSZyaUSyfQM",
  authDomain: "campid-f8c50.firebaseapp.com",
  databaseURL: "https://campid-f8c50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campid-f8c50",
  storageBucket: "campid-f8c50.appspot.com",
  messagingSenderId: "804204225080",
  appId: "1:804204225080:web:665b34de67ec1a8be0fccd",
  measurementId: "G-60NECDVYT5"
};
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
