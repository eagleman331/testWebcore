var admin = require("firebase-admin");
import { getAuth, onAuthStateChanged } from 'firebase/auth'

var serviceAccount = require("./../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://campid-f8c50-default-rtdb.asia-southeast1.firebasedatabase.app"
});

