import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC4E0q-7NLTfd3p9boFNDobDG3YN9iChMQ",
  authDomain: "matrix-labs-main.firebaseapp.com",
  projectId: "matrix-labs-main",
  storageBucket: "matrix-labs-main.appspot.com",
  messagingSenderId: "714045750698",
  appId: "1:714045750698:web:6031cab5f8878a4bad7fd3",
  measurementId: "G-3Q9V688SSV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
