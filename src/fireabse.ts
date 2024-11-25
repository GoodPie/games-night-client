// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk-alvPPyflORmcdw7Nwqa4M0He_yo5_U",
    authDomain: "gamesnight-bd7b2.firebaseapp.com",
    projectId: "gamesnight-bd7b2",
    storageBucket: "gamesnight-bd7b2.firebasestorage.app",
    messagingSenderId: "795657708107",
    appId: "1:795657708107:web:fb3f09ce3405aca8a0e3ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialise Firebase Auth
export const auth = getAuth(app);

/**
 * Sign up with email and password
 * @param email
 * @param password
 */
export const signUpWithEmailAndPassword = async (email: string, password: string) => {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password);
}
