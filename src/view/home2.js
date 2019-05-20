import { register, google, facebook } from "../view-controller/promises.js";
export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="../images/logo.png" alt=""/></div>
    <div class = "col-xs-12 col-lg-6"><img src="../images/titulo.PNG" alt=""/>
    <h2>¡Empecemos con tu registro!</h2>
    <input id="emailRegister" type="text" placeholder="Email"/> </br>
    <input id="contraseñaRegister" type="password" placeholder="Password"/> </br>
    <button id="btnRegister">¡Registrate!</button> 
    <h2>Tambien puedes ingresar con ...</h2>
    <a id="btnFacebook"><img src="../images/facebook.png" alt=""/></a> 
    <a id="btnGoogle"><img src="../images/google.png" alt=""/></a>
    </div>`
    ;
    CreateChildNode.innerHTML = Content;

    const btnRegister = CreateChildNode.querySelector('#btnRegister')
    btnRegister.addEventListener('click', register)

    const btnGoogle = CreateChildNode.querySelector('#btnGoogle')
    btnGoogle.addEventListener('click', google)

    const btnFacebook = CreateChildNode.querySelector('#btnFacebook')
    btnFacebook.addEventListener('click', facebook)

    return CreateChildNode
}
