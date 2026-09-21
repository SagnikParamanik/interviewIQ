
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-95220.firebaseapp.com",
  projectId: "interviewiq-95220",
  storageBucket: "interviewiq-95220.firebasestorage.app",
  messagingSenderId: "638008563785",
  appId: "1:638008563785:web:fd5778adc40af69f1b8798"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export  {auth, provider}