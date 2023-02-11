import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFfiNNH7w0sr3WlVgPiEWL5UMbQ1mt5Ak",
  authDomain: "kio-hack4good.firebaseapp.com",
  projectId: "kio-hack4good",
  storageBucket: "kio-hack4good.appspot.com",
  messagingSenderId: "669486512087",
  appId: "1:669486512087:web:4c5886c9f76d4ec03c3d92",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
