var admin = require("firebase-admin");
import { getAuth, onAuthStateChanged } from 'firebase/auth'

var serviceAccount = require("./../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://campid-f8c50-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const getUsers = () => {
  admin
  .getAuth()
  .getUser(uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
}

export default getUsers;