// Firebase-koppeling voor Opstelling Maker
// -----------------------------------------
// Plak hieronder de gegevens uit de Firebase-console (zie FIREBASE.md, stap 4).
// Laat dit bestand staan bij het updaten van de app: je vervangt alleen index.html.
//
// Zolang hier `null` staat, werkt de app alleen op het eigen apparaat.

window.FIREBASE_CONFIG = { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Tuc2VTmGTleSrA9aucDAAJeaF9m4xxw",
  authDomain: "lineup-c2eba.firebaseapp.com",
  databaseURL: "https://lineup-c2eba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lineup-c2eba",
  storageBucket: "lineup-c2eba.firebasestorage.app",
  messagingSenderId: "974187572036",
  appId: "1:974187572036:web:ca6496bf2b4379af9cc511"};

/* Voorbeeld van hoe het eruit moet zien (met jouw eigen waarden):

window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "maliskamp-opstelling.firebaseapp.com",
  projectId: "maliskamp-opstelling",
  storageBucket: "maliskamp-opstelling.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};

*/
