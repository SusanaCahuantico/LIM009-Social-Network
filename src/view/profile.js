export const menuPrincipal = () => {
    const headerPrincipal = document.createAttribute('div');
    const header = `
    <header>
        <div class="contenedor">
            <img src="css/pawprint.png" alt="">
            <h1 class=""> Mis Patas </h1>
            <input type="checkbox" id="menu-bar">
            <label class="icon-menu" for="menu-bar"></label>
            <nav class="menu">
                <a href="">Mi perfil </a>
                <a href=""> FitLife </a>
                <a href=""> Cerrar Sesión </a>
            </nav>
        </div>
    </header>
    `    
}