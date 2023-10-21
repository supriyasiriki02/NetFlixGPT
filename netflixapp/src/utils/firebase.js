import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsWoOs_ahPuYY4ztLAMJIqp-XtGXOHx9U",
  authDomain: "netflix-app-5efa3.firebaseapp.com",
  projectId: "netflix-app-5efa3",
  storageBucket: "netflix-app-5efa3.appspot.com",
  messagingSenderId: "607389376442",
  appId: "1:607389376442:web:3a5fecb5f6919f8c15c783",
  measurementId: "G-SPB5K2254Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
