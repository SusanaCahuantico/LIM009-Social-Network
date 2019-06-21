import {out} from '../view-controller/promises.js'
import {printPost} from '../view/posts.js'

export const profileUser = (user, posts) => {
    const CreateChildNode = document.createElement("div");
    CreateChildNode.innerHTML= '';
    const userActive = user;
    let Content = `
    <header>
    <div class="contenedor">
    <img src="../images/pawprint.png" alt="huella de mascota"/>
    <h1> Mis patas </h1>
    <input type=checkbox" id="menu-bar">
    <label class="icon-menu" for="menu-bar"></label>
    <nav class="menu">
    <a href="#/perfil"> Mis patas </a>
    <a href="#/login"> Ingresa </a>
    <a href="" id="btnOut"> Cerrar Sesión </a>
    </nav>
    </div>
    </header>
    <section>
    <div>
    <figure>
      <img src="${userActive.photoURL == null ? '../images/no-photo.png' : userActive.photoURL} alt="foto">
    </figure>
    <div>
      <p id="userName"> ${userActive.displayName || userActive.name} </p>
      <p> ${userActive.email} </p>
    </div>
    </div>
    <div id='boxPost'></div>
    </section>
    `;
    CreateChildNode.innerHTML = Content;

    const cerrarSesion = CreateChildNode.querySelector("#btnOut")
    cerrarSesion.addEventListener('click', out)

    const boxPost = CreateChildNode.querySelector("#boxPost")
    boxPost.appendChild(printPost(posts))

    return CreateChildNode;
}