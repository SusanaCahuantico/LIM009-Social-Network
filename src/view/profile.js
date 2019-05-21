 export default ()=>{
        const CreateChildNode = document.createElement("div");
        const Content =`
    <header>
        <div class="contenedor">
            <img src="css/pawprint.png" alt="">
            <h1 class=""> Mis Patas </h1>
            <input type="checkbox" id="menu-bar">
            <label class="icon-menu" for="menu-bar"></label>
            <nav class="menu">
                <a href="#/">Mis Patas </a>
                <a href="#/ingresa">Ingresa </a>
                <a href="#/perfil">Mi perfil </a>
                <a href=""> Cerrar Sesión </a>
            </nav>
        </div>
    </header>
    `    ;
    CreateChildNode.innerHTML = Content;
    return CreateChildNode
}
