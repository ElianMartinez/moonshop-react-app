import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD63zidJ4FvtgOShgNfVwL68pDqzbXbiyA",
  authDomain: "ecoomerce-moonshop.firebaseapp.com",
  databaseURL: "https://ecoomerce-moonshop.firebaseio.com",
  projectId: "ecoomerce-moonshop",
  storageBucket: "ecoomerce-moonshop.appspot.com",
  messagingSenderId: "964893355939",
  appId: "1:964893355939:web:bcbacfa742794a79afb416",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
