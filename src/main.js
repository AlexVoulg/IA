// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { bindUser } from './services/store';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

/* import font awesome icon component */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(fab);
dom.watch();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfRZyeBBrgf2TMqRp8FouXSbW5NMAmj0Q",
  authDomain: "travelia-6e6c0.firebaseapp.com",
  projectId: "travelia-6e6c0",
  storageBucket: "travelia-6e6c0.appspot.com",
  messagingSenderId: "31261793057",
  appId: "1:31261793057:web:d4ef3e4614d52c3497bc60"
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

(async () => bindUser())();

const app = createApp(App);
app.use(router).mount('#app')
