import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAhADa1McBAdXoOmv4T32G7rSBQkATYJ3Q",
    authDomain: "sumpixel-auth.firebaseapp.com",
    databaseURL: "https://sumpixel-auth.firebaseio.com",
    projectId: "sumpixel-auth",
    storageBucket: "sumpixel-auth.appspot.com",
    messagingSenderId: "7190255367",
    appId: "1:7190255367:web:a39d3629fd5215cda2d7a2",
    measurementId: "G-2P5W47Z3HN"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const myFirebase = firebase;