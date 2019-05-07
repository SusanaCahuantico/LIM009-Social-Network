// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import Home from "./view/home.js";

// myFunction();

export const init = () => {
const config = {
  apiKey: "AIzaSyB7zvj9po_juhXbLvE4yZtizGDydklpOnA",
  authDomain: "social-network-2b544.firebaseapp.com",
  databaseURL: "https://social-network-a964e.firebaseio.com",
  projectId: "social-network-2b544",
  storageBucket: "social-network-2b544.appspot.com",
  messagingSenderId: "40801451226"
};
firebase.initializeApp(config);
};
init();

const FatherElement = document.getElementById('father'); 
FatherElement.appendChild(Home());

