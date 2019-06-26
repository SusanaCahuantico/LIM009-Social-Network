import {  init} from './view-controller/routes.js';

export const initFirebase = () => {
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

window.addEventListener('load', () => {
  initFirebase()
  init()
 
 /*  const FatherElement = document.getElementById('father'); 
  FatherElement.appendChild(Home()); */
  
})