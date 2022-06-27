import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvQKnc75q6zc3km8qOupgLVJgtw__QEuM",
  authDomain: "hacktrail-b89a7.firebaseapp.com",
  projectId: "hacktrail-b89a7",
  storageBucket: "hacktrail-b89a7.appspot.com",
  messagingSenderId: "331623784730",
  appId: "1:331623784730:web:e3f694ea8b23dff5e88ca3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
