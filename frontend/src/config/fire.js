import firebase from 'firebase';
//TODO only need /app, /firestore, /auth etc

const config = {
  apiKey: 'AIzaSyDL_jEstE_tT592DuEfyHwW1SgPOMCXwvM',
  authDomain: 'dropin-8f544.firebaseapp.com',
  databaseURL: 'https://dropin-8f544.firebaseio.com',
  projectId: 'dropin-8f544',
  storageBucket: 'dropin-8f544.appspot.com',
  messagingSenderId: '262572318909',
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

const fire = firebase.initializeApp(config);
export {fire, googleProvider};
