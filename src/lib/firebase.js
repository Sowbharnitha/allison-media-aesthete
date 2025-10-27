import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDokIYDwsxarIxxaKgsAEGHWzmawkNZtNw",
  authDomain: "azhizen-media.firebaseapp.com",
  projectId: "azhizen-media",
  storageBucket: "azhizen-media.firebasestorage.app",
  messagingSenderId: "818735242033",
  appId: "1:818735242033:web:d2ee6d5e8c3338f229ee10",
  measurementId: "G-K2X7DFEL8T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };