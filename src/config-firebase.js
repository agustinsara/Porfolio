// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the instance of Firestore
export const db = getFirestore(app);
