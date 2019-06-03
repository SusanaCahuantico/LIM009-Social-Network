import { components } from '../view-controller/index.js'
import {getPost} from '../controller/firebase.js'

export const changeView = (route) => {
    const father = document.getElementById("father");
    father.innerHTML = '';
    
 switch (route) {
     case '#/':  father.appendChild(components.home())
     break;
     case '#/registrate': father.appendChild(components.home2())
     break;
     case '#/perfil':
         getPost((notas) => {  
     father.appendChild(components.header())
     father.appendChild(components.body())
         })
     break;
     default:
         break;
 }   
}

export const init = () => {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init)