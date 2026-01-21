import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZOlsU0m7lz-QCftJpC9WprUwQjng5yNQ",
    authDomain: "smeoceanways-e7cfd.firebaseapp.com",
    projectId: "smeoceanways-e7cfd",
    storageBucket: "smeoceanways-e7cfd.firebasestorage.app",
    messagingSenderId: "165247353803",
    appId: "1:165247353803:web:6f4336c0c96acfcbd4ac4e"
};

const app = initializeApp(firebaseConfig);

console.log("PROJECT ID 👉", getApp().options.projectId);

// ✅ EXPORT app
export default app;

// ✅ EXPORT db
export const db = getFirestore(app);
