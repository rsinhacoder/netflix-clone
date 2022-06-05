import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 //import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA_66SGmgg7v1egaS06ZYf-pZqgjVOVaHo",
  authDomain: "netflix-8b006.firebaseapp.com",
  projectId: "netflix-8b006",
  storageBucket: "netflix-8b006.appspot.com",
  messagingSenderId: "330139134605",
  appId: "1:330139134605:web:343177f644ea58589d90c4"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
//3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
