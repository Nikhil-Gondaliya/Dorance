import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5Rr7DCjtC3PlZH2d4IL5Z4VZu1XCw5gg",
    authDomain: "smeoceanways-5166c.firebaseapp.com",
    projectId: "smeoceanways-5166c",
    storageBucket: "smeoceanways-5166c.firebasestorage.app",
    messagingSenderId: "1093455465021",
    appId: "1:1093455465021:web:ebe070914b5b0483a6f854"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
