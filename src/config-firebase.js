// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1IKrWFyg6tlG-2eoq1s9pVcmKwPfVd_M",
  authDomain: "porfolio-b2fb8.firebaseapp.com",
  projectId: "porfolio-b2fb8",
  storageBucket: "porfolio-b2fb8.appspot.com",
  messagingSenderId: "438636948095",
  appId: "1:438636948095:web:950377a8edd89386962d4a",
  measurementId: "G-HQKZX90RZW"
};

// Initialize Firebase
export const db = getFirestore(app);
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);