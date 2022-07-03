import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAUvSfDws5UD3-BWN1V6Zn1b7IhCTqydPA",
  authDomain: "perrodonar.firebaseapp.com",
  projectId: "perrodonar",
  storageBucket: "perrodonar.appspot.com",
  messagingSenderId: "636081833454",
  appId: "1:636081833454:web:f9c372710d4fb0bb31baff",
  measurementId: "G-57B39RK4LG"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(firebase)

export default { db, auth, storage, provider};

