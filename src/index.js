// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyDWL-_I1n_C5FeIEZnYK-nUTcGVZtDofoU",
authDomain: "kino-69dee.firebaseapp.com",
databaseURL: "https://kino-69dee-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "kino-69dee",
storageBucket: "kino-69dee.appspot.com",
messagingSenderId: "258462841491",
appId: "1:258462841491:web:4c0fbd68e5e98f653eab66",
measurementId: "G-4MD5V5L77Q"
});
const db = getFirestore(firebaseApp);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}