import { components } from '../view/index.js'

const changeView = (route) => {
    const padre = document.getElementById("father")
    padre.innerHTML = '';
 switch (route) {
     case '#/': { return father.appendChild(components.home())}
     case '#/registrate': { return father.appendChild(components.home2())}
     case '#/perfil': { return father.appendChild(components.profile())}
 
     default:
         break;
 }   
console.log(route)
}
export {changeView}