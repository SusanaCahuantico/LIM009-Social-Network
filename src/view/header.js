import {out} from '../view-controller/promises.js'

export default ()=>{
        const CreateChildNode = document.createElement("header");
        const Content =`
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../images/pawprint.png" alt="huellas" width="40" height="40" class="me-2">
          <h1 class="m-0">Mis Patas</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#/perfil">Mi perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="btnOut">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

    CreateChildNode.innerHTML = Content;
    
    const cerrarSesion = CreateChildNode.querySelector('#btnOut')
    cerrarSesion.addEventListener('click', out)

    return CreateChildNode
}