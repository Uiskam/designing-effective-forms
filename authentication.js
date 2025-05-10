// Import the functions you need from the SDKs you need



// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB0XjNy9Oj-xPHFLgqUWbxYxN0HTgIcNkY",

  authDomain: "lab04-tpf.firebaseapp.com",

  projectId: "lab04-tpf",

  storageBucket: "lab04-tpf.firebasestorage.app",

  messagingSenderId: "151054668842",

  appId: "1:151054668842:web:0a417418e2455104409f53"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const emailInput = document.getElementById('exampleInputEmail1');
const nameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

const userSignIn = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
        emailInput.value = user.email;
        let firstName = user.displayName.split(" ")[0];
        let lastName = user.displayName.split(" ")[1];
        nameInput.value = firstName;
        lastNameInput.value = lastName;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
 }

 const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have been signed out!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
 }

 onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
    }
 })
console.log("User is not authenticated");
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);