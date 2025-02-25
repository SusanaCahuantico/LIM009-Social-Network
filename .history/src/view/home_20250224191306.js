import { logear, google } from "../view-controller/promises.js";

export default () => {
    const CreateChildNode = document.createElement("div");
    const Content =
        `<div class="row">
    <div class="col-md-6 logo mx-auto p-2">
    <img class="img-fluid" src="../images/logo.png" alt=""/>
    </div>
    <div class="col-md-6 intro general">
    <img src="../images/titulo.PNG" alt=""/>
    <h3> Bienvenida </h3>
    <input class="form-control mx-auto p-2" id="emailLogin" style="width: 350px" type="text" placeholder="Email"/> </br>
    <input class="form-control mx-auto p-2" id="contraseñaLogin" style="width: 350px" type="password" placeholder="Password"/> </br>
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