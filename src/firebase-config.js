// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnV28JFQspbit03XH6Qtms7qRlFj2mVjU",
  authDomain: "clone-268f2.firebaseapp.com",
  projectId: "clone-268f2",
  storageBucket: "clone-268f2.appspot.com",
  messagingSenderId: "790857771408",
  appId: "1:790857771408:web:6b94b17e160c8073c1eb15",
  measurementId: "G-3TYY46G38P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
