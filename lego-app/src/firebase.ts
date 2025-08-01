// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3U3kcx0Eyv5yc1Ztmn8DEX2ZY5tVZCA4',
  authDomain: 'lego-app-c5499.firebaseapp.com',
  projectId: 'lego-app-c5499',
  storageBucket: 'lego-app-c5499.firebasestorage.app',
  messagingSenderId: '288140133448',
  appId: '1:288140133448:web:e1d6f5768a87d34b0b447d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);