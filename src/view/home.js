import { logear, google } from "../view-controller/promises.js";

export default () => {
    const tempContainer = document.createElement('div');

    tempContainer.innerHTML = `
        <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div class="bg-white p-5 rounded shadow-sm col-md-6 col-lg-4">
                <div class="text-center mb-4">
                    <img src="../images/logo.png" alt="Logo" class="img-fluid" style="max-width: 150px;">
                </div>
                <div class="text-center mb-4 ms-4 ps-4">
                    <h1>MISPATAS</h1>
                </div>

                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="emailLogin" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="contraseñaLogin" placeholder="Password">
                    </div>
                    <button type="button" class="btn btn-primary w-100 mb-3" id="btnLogin">Ingresar</button>
                </form>

                <p class="text-center mb-3">También puedes ingresar con ...</p>
                <div class="text-center mb-3">
                    <img src="../images/busqueda(1).png" alt="Google" id="btnGoogle" class="img-fluid" style="max-width: 40px; cursor: pointer;">
                </div>

                <p class="text-center mb-0">¿No tienes una cuenta? <a href="#/registrate" class="text-decoration-none">¡Regístrate!</a></p>
            </div>
        </div>
    `;

    const mainNode = tempContainer.firstElementChild;

    const btnLogIn = mainNode.querySelector('#btnLogin');
    btnLogIn.addEventListener('click', logear);

    const botonGoogle = mainNode.querySelector('#btnGoogle');
    botonGoogle.addEventListener('click', google);

    return mainNode;
};