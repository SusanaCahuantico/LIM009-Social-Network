import {loginUser} from '../view/login.js';
import {registerUSer} from '../view/registrate.js';
import { profileUser} from '../view/profile.js';
import { getPost, usuarioActivo, observador} from '../controller/firebase.js';
import {getName} from '../view-controller/promises.js'

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return changeView('#/home');
 
    } else {
      return changeView(hash);
    }
}

export const changeView = (route) => {
    const father = document.getElementById("father");
    father.innerHTML = '';
 switch (route) {
     case 'home':
       father.innerHTML = '';  
     father.appendChild(loginUser());
     break;
     case 'registrate': father.appendChild(registerUSer())
     break;
     case 'profile': {
       father.innerHTML = '';
       const mostrarPerfil = (user) => {
         getName(user)
         .then((name) => {
           getPost((posts) => {
             father.innerHTML = '';
             father.appendChild(profileUser({
               ...user,
               name,
             }, posts))
           })
         });
       }
       const u = usuarioActivo();
       if(u) {
         mostrarPerfil(u)
       } else {
         observador(mostrarPerfil)
         if(u) {
           mostrarPerfil(u)
         } 
        }
         break;
       } 
       default:
      //father.appendChild(Login());
       break;
}
}

export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}