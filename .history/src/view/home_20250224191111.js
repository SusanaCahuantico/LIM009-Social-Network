import { logear, google } from "../view-controller/promises.js";

export default () => {
    const CreateChildNode = document.createElement("div");
    const Content =
        `<div class="row">
    <div class="col-md-6 logo">
    <img class="img-fluid" src="../images/logo.png" alt=""/>
    </div>
    <div class="col-md-6 intro general">
    <img src="../images/titulo.PNG" alt=""/>
    <h2> Bienvenida! </h2>
    <input class="form-control" id="emailLogin" type="text" placeholder="Email"/> </br>
    <input class="form-control mx-auto p-2" id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button class="btn btn-primary" id="btnLogin">Ingresar</button> </br>
    <p>Tambien puedes ingresar con ...</p>
     <img id="btnGoogle" class ="icon" src="../images/busqueda(1).png" alt=""/>
    <span>No tienes un cuenta? <a href="#/registrate"> Registrate!</a> </span>
    </div>
    </div>`
        ;
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)

    const botonGoogle = CreateChildNode.querySelector('#btnGoogle')
    botonGoogle.addEventListener('click', google)

    return CreateChildNode
}