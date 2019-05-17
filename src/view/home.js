import { logear, google, facebook } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="../images/logo.png" alt=""/></div>
    <div class = "col-xs-12 col-lg-6"><img src="../images/titulo.PNG" alt=""/>
    <h2>Bienvenida!</h2>
    <input id="emailLogin" type="text" placeholder="Email"/> </br>
    <input id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button id="btnLogin">Log in</button>
    <h2>Tambien puedes ingresar con ...</h2>
    <a id="btnFacebook"><img src="../images/facebook.png" alt=""/></a> 
    <a id="btnGoogle"><img src="../images/google.png" alt=""/></a>
    <h2>No tienes un cuenta? <a id="register"> REGISTRATE!</a> </h2> 
    </div>`
    ;
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)

    const btnGoogle = CreateChildNode.querySelector('#btnGoogle')
    btnGoogle.addEventListener('click', google)

    const btnFacebook = CreateChildNode.querySelector('#btnFacebook')
    btnFacebook.addEventListener('click', facebook)

return CreateChildNode
}
