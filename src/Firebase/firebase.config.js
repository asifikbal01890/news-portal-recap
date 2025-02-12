// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQlhq787JoxdiScbmK9xTPb4HL0CtMMrc",
  authDomain: "news-portal-recap.firebaseapp.com",
  projectId: "news-portal-recap",
  storageBucket: "news-portal-recap.firebasestorage.app",
  messagingSenderId: "271821183364",
  appId: "1:271821183364:web:bb7d7bf1b6c9ba9cf525d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;