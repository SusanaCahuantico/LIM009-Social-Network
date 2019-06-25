import { logear, google, facebook } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
<<<<<<< HEAD
    const Content = 
    `
    <div class = "col-xs-12 col-lg-6"><img src="../images/logo.png" alt=""/></div>
    <div class = "col-xs-12 col-lg-6"><img src="../images/titulo.PNG" alt=""/>
=======
    const Content = `<div class ="boxBig">
    <div class = "col-xs-12 col-lg-6 paddImg"><img src="../images/logo.png" alt=""/></div>
    <div>
    <div class = "col-xs-12 col-lg-6 boxBig flexText"><img src="../images/titulo.PNG" alt=""/>
>>>>>>> 879a0efb1bc6b96bcf0a21e51d972f5ce3305f13
    <div class ="contenedor">
    <h2> Bienvenida! </h2>
    <input class ="input" id="emailLogin" type="text" placeholder="Email"/> </br>
    <input class="input" id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button class ="botonInicio" id="btnLogin">Log in</button>
    <h2>Tambien puedes ingresar con ...</h2>
<<<<<<< HEAD
    <img id="btnFacebook"class ="iconos"  src="../images/facebook.png" alt=""/>
    <img id="btnGoogle" class ="iconos" src="../images/google.png" alt=""/>
    <h2>No tienes un cuenta? <a href="#/registrate"> REGISTRATE!</a> </h2> 
    </div>
    </div>
    `;
=======
    <div class = "col-xs-12 col-lg-12 spaceIcon">
    <img class = "col-xs-6 col-lg-6" id="btnFacebook"class ="iconos"  src="../images/facebook.png" alt=""/>
   <img class = "col-xs-6 col-lg-6" id="btnGoogle" class ="iconos" src="../images/google.png" alt=""/>
   </div>
    <h2>No tienes un cuenta? <a href="#/registrate"> REGISTRATE!</a> </h2> 
    </div>
    </div>
    </div>
    </div>`
    ;
>>>>>>> 879a0efb1bc6b96bcf0a21e51d972f5ce3305f13
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)

    const botonGoogle = CreateChildNode.querySelector('#btnGoogle')
    botonGoogle.addEventListener('click', google)

    const botonFacebook = CreateChildNode.querySelector('#btnFacebook')
    botonFacebook.addEventListener('click', facebook)

return CreateChildNode
}