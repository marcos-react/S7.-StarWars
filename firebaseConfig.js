
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "API",
    authDomain: "AUTHDOMAIN",
    projectId: "PROJECTID",
    storageBucket: "STORAGEBUCKET",
    messagingSenderId: "MESSAGINGSENDERID",
    appId: "appID"
  };

// Inicialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


