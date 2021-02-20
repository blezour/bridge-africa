import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// replace the values with your firebase config
var firebaseConfig = {
    apiKey: "AIzaSyCbflxd9xQN_hH_s7HSlE1X6o6kPpbkycw",
    authDomain: "vue-crud-99e66.firebaseapp.com",
    projectId: "vue-crud-99e66",
    storageBucket: "vue-crud-99e66.appspot.com",
    messagingSenderId: "522040826397",
    appId: "1:522040826397:web:41a57fbdd28f542ce944f4"
  };
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection ref
const usersCollection = db.collection('users')
const gamesCollection = db.collection('games')

export {
    db,
    auth,
    storage,
    usersCollection,
    gamesCollection
}

