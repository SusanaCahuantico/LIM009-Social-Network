export default ()=>{
        const CreateChildNode = document.createElement("div");
        const Content =`
    <header>
        <div class="contenedor">
            <img src="../images/pawprint.png" alt=""/>
            <h1 class=""> Mis Patas </h1>
            <input type="checkbox" id="menu-bar">
            <label class="icon-menu" for="menu-bar"></label>
            <nav class="menu">
                <a href="#/mispatas">Mis Patas </a>
                <a href="#/ingresa">Ingresa </a>
                <a href="#/miperfil">Mi perfil </a>
                <a href=""> Cerrar Sesión </a>
            </nav>
            </header>
            </div>

            <body>
			<form class="formulario" action="">
				<input type="text" id="tareaInput" placeholder="Agrega tu tarea">
				<input type="button" class="boton" id="btn-agregar" value="Agregar Tarea">
			</form>
 
		<div class="wrap">
			<ul class="lista" id="lista">
				<li><a href="#">1 Lorem ipsum dolor sit amet.</a></li>
				<li><a href="#">2 Lorem ipsum dolor sit amet.</a></li>
				<li><a href="#">3 Lorem ipsum dolor sit amet.</a></li>
            </ul>
            </div>
</body>
    `    ;
    CreateChildNode.innerHTML = Content;
    return CreateChildNode
}
        </div>
    </header>

