import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0I7McgBWRiW6pq8v0RK8BOmFo-6wlqRY",
    authDomain: "messengger-app.firebaseapp.com",
    databaseURL: "https://messengger-app.firebaseio.com",
    projectId: "messengger-app",
    storageBucket: "messengger-app.appspot.com",
    messagingSenderId: "760142262049",
    appId: "1:760142262049:web:f957da82088e88cd3f9860",
    measurementId: "G-2C29TJYPRV"

});

const db = firebaseApp.firestore();
export default db;