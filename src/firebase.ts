import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'minibuck-1b232.firebaseapp.com',
  databaseURL: 'https://minibuck-1b232.firebaseio.com',
  projectId: 'minibuck-1b232',
  storageBucket: 'minibuck-1b232.appspot.com',
  messagingSenderId: '303297707548',
  appId: process.env.FIREBASE_APP_ID,
  measurementId: 'G-Z5HKYDJV9F',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
