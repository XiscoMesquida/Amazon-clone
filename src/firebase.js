import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABxpt3GX8r9FKrViGDqUEl1jOI34pWJQ4",
  authDomain: "clone-d6e85.firebaseapp.com",
  databaseURL: "https://clone-d6e85-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clone-d6e85",
  storageBucket: "clone-d6e85.appspot.com",
  messagingSenderId: "576914940325",
  appId: "1:576914940325:web:2430746eea5490a401484c",
  measurementId: "G-L2BKJ07MB9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


