import { logear, google } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = 
    `<div class ="boxBig">
    <div class = "col-xs-12 col-lg-6 paddImg"><img src="../images/logo.png" alt=""/></div>
    <div>
    <div class = "col-xs-12 col-lg-6 boxBig flexText"><img src="../images/titulo.PNG" alt=""/>
    <div class ="contenedor">
    <h2> Bienvenida! </h2>
    <input class ="input" id="emailLogin" type="text" placeholder="Email"/> </br>
    <input class="input" id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button class ="botonInicio" id="btnLogin">Log in</button>
    <h3>Tambien puedes ingresar con ...</h3>
    <div class="col-xs-12 col-lg-12 spaceIcon">
     <img class="col-xs-6 col-lg-6" id="btnGoogle" class ="iconos" src="../images/busqueda(1).png" alt=""/>
    </div>
    <h3>No tienes un cuenta? <a href="#/registrate"> Registrate!</a> </h3> 
    </div>
    </div>
    </div>
    </div>`
    ;
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)

    const botonGoogle = CreateChildNode.querySelector('#btnGoogle')
    botonGoogle.addEventListener('click', google)

    //const botonFacebook = CreateChildNode.querySelector('#btnFacebook')
    //botonFacebook.addEventListener('click', facebook)

return CreateChildNode
}