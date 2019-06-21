import Home from "./view/home.js";
import { changeView } from './view-controller/routes.js';

const initRouter = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash)
)}


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
  initRouter()
  const FatherElement = document.getElementById('father'); 
  FatherElement.appendChild(Home());
  
})