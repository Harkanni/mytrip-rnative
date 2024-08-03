// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlKM0YsZZAtJYRZDTC0WaRWp0flGlanUk",
  authDomain: "startups-d7056.firebaseapp.com",
  projectId: "startups-d7056",
  storageBucket: "startups-d7056.appspot.com",
  messagingSenderId: "948511905152",
  appId: "1:948511905152:web:fbcbf1d6164b72b3791d65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)     
 });