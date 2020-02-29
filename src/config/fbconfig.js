import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyB0TxM5QzGRmlwBjUDHb-ZGNWeAex3tgLk",
    authDomain: "blogproject-cd042.firebaseapp.com",
    databaseURL: "https://blogproject-cd042.firebaseio.com",
    projectId: "blogproject-cd042",
    storageBucket: "blogproject-cd042.appspot.com",
    messagingSenderId: "126759938135",
    appId: "1:126759938135:web:34e7fe6b87d4e329355b12",
    measurementId: "G-QG2SP9RWF0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  export default firebase