import { logear, google } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = 
    `<div class = "general">
    <div class = "logo">
    <img src="../images/logo.png" alt=""/>
    </div>
    <div class = "intro general">
    <img src="../images/titulo.PNG" alt=""/>
    <h2> Bienvenida! </h2>
    <input class ="input" id="emailLogin" type="text" placeholder="Email"/> </br>
    <input class="input" id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button class ="botonInicio" id="btnLogin">Log in</button>
    <h3>Tambien puedes ingresar con ...</h3>
     <img id="btnGoogle" class ="iconos" src="../images/busqueda(1).png" alt=""/>
    <h3>No tienes un cuenta? <a href="#/registrate"> Registrate!</a> </h3>
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