import { components } from '../view-controller/index.js'

const changeView = (route) => {
    const padre = document.getElementById("father")
    padre.innerHTML = '';
 switch (route) {
     case '#/':  father.appendChild(components.home())
     break;
     case '#/registrate': father.appendChild(components.home2())
     break;
     case '#/perfil':  father.appendChild(components.header())
                       father.appendChild(components.body())
     break;
     default:
         break;
 }   
console.log(route)
}
export {changeView}