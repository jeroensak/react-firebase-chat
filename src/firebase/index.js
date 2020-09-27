import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyApyeqRKRIsUSYXjW2nqVL6KtvcFs5moN4",
  authDomain: "react-firebase-chat-bd05d.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-bd05d.firebaseio.com",
  projectId: "react-firebase-chat-bd05d",
  storageBucket: "react-firebase-chat-bd05d.appspot.com",
  messagingSenderId: "245825138171",
  appId: "1:245825138171:web:d108354ca5d47928ba2f5e"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
