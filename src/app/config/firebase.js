 
 import firebase from "firebase/app"
 import 'firebase/firestore'
 import 'firebase/database'
 import 'firebase/auth'
 import 'firebase/storage'
 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCutD_sY6577oqEd7UC-qtA4ml0kmDT0mk",
    authDomain: "collegeevents-90b2d.firebaseapp.com",
    databaseURL: "https://collegeevents-90b2d.firebaseio.com",
    projectId: "collegeevents-90b2d",
    storageBucket: "collegeevents-90b2d.appspot.com",
    messagingSenderId: "5757639689",
    appId: "1:5757639689:web:d81e45ca53dbaf2293acd8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase