import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmKYCNd68ghPBueFADmaioyfXIMV9LPcU",
  authDomain: "admitfire.firebaseapp.com",
  projectId: "admitfire",
  storageBucket: "admitfire.appspot.com",
  messagingSenderId: "84404223829",
  appId: "1:84404223829:web:b4831d7708ada3abdc79dc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();




export default db; 