import { cibGmail } from '@coreui/icons';
import firebase from 'firebase/compat/app';

const admin = require('firebase-admin');


admin.initializeApp();



























// import { initializeApp } from 'firebase/app';
// import { getFunctions, httpsCallable } from "firebase/functions";

// const otherAppConfig = ({
//   projectId: "encoderfortp",
//   apiKey: "AIzaSyCWPGjVR_rJ3vrIg_Pp66le8vd340If84c",
//   authDomain: "encoderfortp.firebaseapp.com",
// });

// var otherApp = firebase.initializeApp(otherAppConfig, "other");
// const functions = getFunctions(otherApp);
// const addMessage = httpsCallable(functions, 'addMessage2');

// const addAdminRole = httpsCallable(functions, 'addAdminRole');

// export default addMessage

// exports.addAdminRole = functions.https.onCall((data, context) => {
//   //get user and custom claims(admin)
//   return admin.auth().getUserByEmail(data.email).then(user => {
//     return admin.auth().setCustomUserClaims(user.uid, {
//       admin:true
//     });
//   }).then(()=> {
//     return {
//       message: `Sucess! ${data.email} has been made an admin`
//     }
//   }).catch(err => {
//     return err;
//   })
// })



