// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDkbAXZUM-vdg6gUcu5dlUxg9BYKRQQ50",
  authDomain: "playeropinion-1971a.firebaseapp.com",
  projectId: "playeropinion-1971a",
  storageBucket: "playeropinion-1971a.appspot.com",
  messagingSenderId: "426874552857",
  appId: "1:426874552857:web:4ef3b487180a0cecce2088",
  measurementId: "G-J68NWHD92V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export default db;