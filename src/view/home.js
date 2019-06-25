import { logear, google, facebook } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = 
    `
    <div class = "col-xs-12 col-lg-6"><img src="../images/logo.png" alt=""/></div>
    <div class = "col-xs-12 col-lg-6"><img src="../images/titulo.PNG" alt=""/>
    <div class ="contenedor">
    <h2> Bienvenida! </h2>
    <input class ="input" id="emailLogin" type="text" placeholder="Email"/> </br>
    <input class="input" id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button class ="botonInicio" id="btnLogin">Log in</button>
    <h2>Tambien puedes ingresar con ...</h2>
    <img id="btnFacebook"class ="iconos"  src="../images/facebook.png" alt=""/>
    <img id="btnGoogle" class ="iconos" src="../images/google.png" alt=""/>
    <h2>No tienes un cuenta? <a href="#/registrate"> REGISTRATE!</a> </h2> 
    </div>
    </div>
    `;
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)

    const botonGoogle = CreateChildNode.querySelector('#btnGoogle')
    botonGoogle.addEventListener('click', google)

    const botonFacebook = CreateChildNode.querySelector('#btnFacebook')
    botonFacebook.addEventListener('click', facebook)

return CreateChildNode
}