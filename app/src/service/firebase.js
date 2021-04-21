import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyAl45uf12EKoZElDTj77kUPzb07EIorvjo",
    authDomain: "gym-service123.firebaseapp.com",
    projectId: "gym-service123",
    storageBucket: "gym-service123.appspot.com",
    messagingSenderId: "573840584596",
    appId: "1:573840584596:web:158debf58a4331b358a981",
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};

export default fb;
