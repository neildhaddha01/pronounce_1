import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCVg2rlPfNxvTqbxSn8meyyokHTrexTlQQ",
  authDomain: "myapp-bea96.firebaseapp.com",
  projectId: "myapp-bea96",
  storageBucket: "myapp-bea96.appspot.com",
  messagingSenderId: "705073945547",
  appId: "1:705073945547:web:e913a5fb67bb5f3923344e"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig); 

  export default firebase.firestore(); 