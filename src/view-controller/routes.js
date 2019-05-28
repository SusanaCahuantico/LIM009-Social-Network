import { components } from '../view-controller/index.js'

const changeView = (route) => {
    const father = document.getElementById("father")
    father.innerHTML = '';
    
 switch (route) {
     case '#/': { return father.appendChild(components.home())}
     case '#/registrate': { return father.appendChild(components.home2())}
     case '#/perfil': { return father.appendChild(components.profile())}

     default:
         break;
 }   
console.log(route)
}

export const init = () => {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init)