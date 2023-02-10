// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfiNNH7w0sr3WlVgPiEWL5UMbQ1mt5Ak",
  authDomain: "kio-hack4good.firebaseapp.com",
  projectId: "kio-hack4good",
  storageBucket: "kio-hack4good.appspot.com",
  messagingSenderId: "669486512087",
  appId: "1:669486512087:web:4c5886c9f76d4ec03c3d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConfig);

export default firebase;