// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOD6beB7A_ou10ewoXJNtmQE9p4EXzTOk",
    authDomain: "mazedbike.firebaseapp.com",
    projectId: "mazedbike",
    storageBucket: "mazedbike.firebasestorage.app",
    messagingSenderId: "419694712798",
    appId: "1:419694712798:web:26472806e1113463daaf4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// export default auth;
export { app, auth };