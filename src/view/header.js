import { out } from '../view-controller/promises.js';

export default () => {
    const header = document.createElement("header");
    const navbarContent = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src="../images/pawprint.png" alt="huellas" width="40" height="40" class="me-2">
                    <h1 class="m-0" style="font-family: 'Arial', sans-serif; font-size: 1.5rem; font-weight: bold;">Mis Patas</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="#/perfil">
                                <i class="fas fa-user me-2"></i>Mi perfil
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="#" id="btnOut">
                                <i class="fas fa-sign-out-alt me-2"></i>Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    header.innerHTML = navbarContent;

    const cerrarSesion = header.querySelector('#btnOut');
    cerrarSesion.addEventListener('click', out);

    return header;
};