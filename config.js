import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCDVHSg5zzwuiTBkAWYLPYVrh7Zp4Kf1iY",
  authDomain: "c-78-1fdf1.firebaseapp.com",
  databaseURL: "https://c-78-1fdf1-default-rtdb.firebaseio.com",
  projectId: "c-78-1fdf1",
  storageBucket: "c-78-1fdf1.appspot.com",
  messagingSenderId: "165230997551",
  appId: "1:165230997551:web:12e0a230f0f9e8902756da"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
