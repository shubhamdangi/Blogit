import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtebcJ7fR6YW5FVb9T6F0N2-HhtPepYyk",
  authDomain: "blogitxz.firebaseapp.com",
  projectId: "blogitxz",
  storageBucket: "blogitxz.appspot.com",
  messagingSenderId: "739140097028",
  appId: "1:739140097028:web:461fb7ad4845ff10525151",
  measurementId: "G-T5FMVXDRQD",
};

// var firebaseConfig = {
//   apiKey: "AIzaSyAIpL5xfbw2e506dCbJ2Ab0PwXGYrMuXb0",
//   authDomain: "crud-94b7b.firebaseapp.com",
//   projectId: "crud-94b7b",
//   storageBucket: "crud-94b7b.appspot.com",
//   messagingSenderId: "1071369844356",
//   appId: "1:1071369844356:web:9d03e58822baa3aa99f4d1",
//   measurementId: "G-SWLEKW7G87",
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();

export default firebase;
