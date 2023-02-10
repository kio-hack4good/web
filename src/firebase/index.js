import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFfiNNH7w0sr3WlVgPiEWL5UMbQ1mt5Ak",
  authDomain: "kio-hack4good.firebaseapp.com",
  projectId: "kio-hack4good",
  storageBucket: "kio-hack4good.appspot.com",
  messagingSenderId: "669486512087",
  appId: "1:669486512087:web:4c5886c9f76d4ec03c3d92",
};

initializeApp(firebaseConfig);
getFirestore(firebaseConfig);

export default firebase;
