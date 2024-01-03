// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuQMpPCwiOGuzUIo9pDy6LnvMCbW9_Oik",
    authDomain: "app-react-ui.firebaseapp.com",
    projectId: "app-react-ui",
    storageBucket: "app-react-ui.appspot.com",
    messagingSenderId: "966162205638",
    appId: "1:966162205638:web:c29ebeb553bdeba81c80c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
