import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHMxhFKxbUPjrnluH2Obu7DX4wJz-ccWA",
  authDomain: "multi-shop-1e0be.firebaseapp.com",
  projectId: "multi-shop-1e0be",
  storageBucket: "multi-shop-1e0be.appspot.com",
  messagingSenderId: "652680718810",
  appId: "1:652680718810:web:3ecd797ea3b22dd432b8e3",
  measurementId: "G-Y1PH50Q0P2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
