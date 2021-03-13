import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCk_z1InzOZsAptQhT7-NahaoaKqHVIWfQ",
  authDomain: "crwn-db-507a0.firebaseapp.com",
  projectId: "crwn-db-507a0",
  storageBucket: "crwn-db-507a0.appspot.com",
  messagingSenderId: "207276217949",
  appId: "1:207276217949:web:4d866b1cecf65751085fb4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
