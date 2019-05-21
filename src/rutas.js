import {menuPrincipal} from './view/profile.js'
// Vamos a crear una funcion para cambiar la url:
const init = () => {
    window.addEventListener('hashchange', () => menuPrincipal(window.location.hash))
}

window.addEventListener('load', init)