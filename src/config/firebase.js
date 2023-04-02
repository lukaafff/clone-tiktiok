import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBrRT88b2PmRCoYXePuKjioxBNitxUO27Y",
  authDomain: "tiktok---clone-af7f3.firebaseapp.com",
  projectId: "tiktok---clone-af7f3",
  storageBucket: "tiktok---clone-af7f3.appspot.com",
  messagingSenderId: "930214012641",
  appId: "1:930214012641:web:b1e00c6bc41e1294a7f9a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;