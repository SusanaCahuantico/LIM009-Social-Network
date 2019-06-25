import {out} from '../view-controller/promises.js'

export default ()=>{
        const CreateChildNode = document.createElement("div");
        const Content =`
        <header>
        <div class="contenedor">
            <img src="../images/pawprint.png" alt="huellas"/>
            <h1 class=""> Mis Patas </h1>
            <input type="checkbox" id="menu-bar" >
            <label class="icon-menu" for="menu-bar"></label>
            <nav class="menu">
                <a href="#/perfil">Mi perfil </a>
                <a href="" id="btnOut"> Cerrar Sesión </a>
            </nav>
            </div>
    </header>
    <section id="user">
    </section>
    `;

    CreateChildNode.innerHTML = Content;
    
    const cerrarSesion = CreateChildNode.querySelector('#btnOut')
    cerrarSesion.addEventListener('click', out)

    return CreateChildNode
}