import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore, memoryLocalCache } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Debug Check for Config
const missingKeys = Object.keys(firebaseConfig).filter(key => key !== 'measurementId' && !firebaseConfig[key]);
if (missingKeys.length > 0) {
    console.error(`Firebase Config Missing Keys: ${missingKeys.join(', ')}. Check your .env file.`);
} else {
    console.log("Firebase Config Loaded Successfully");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore with explicit Memory Cache to avoid persistence locks
const db = initializeFirestore(app, {
    localCache: memoryLocalCache()
});
console.log("Firebase Firestore Initialized (Forced Memory Cache)");

export { db };
export default app;
