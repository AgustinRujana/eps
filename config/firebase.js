import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDbw53tynH31sohV_bDnkidYFM0rRH4CzU',
  authDomain: 'eps-db-76e01.firebaseapp.com',
  projectId: 'eps-db-76e01',
  storageBucket: 'eps-db-76e01.appspot.com',
  messagingSenderId: '733320441383',
  appId: '1:733320441383:web:d24a1b81d6a64b7e3ae802',
  measurementId: 'G-R3L1K23WFM',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;

export const db = getFirestore();
