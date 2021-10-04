import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIGdPCxFL9fzo7e2g340lfK0yU21KX5oU",
    authDomain: "memories-c74d1.firebaseapp.com",
    projectId: "memories-c74d1",
    storageBucket: "memories-c74d1.appspot.com",
    messagingSenderId: "799131611104",
    appId: "1:799131611104:web:053dd59d7ac5a3d12d0585",
    measurementId: "G-Y6RYB8BGL1"
};



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
