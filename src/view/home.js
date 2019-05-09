import { register, logear, out, google, facebook } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="http://purelytwins.com/wp-content/uploads/2013/03/purely-fit-life-logos-600px3.png"/></div>
    <div class = "col-xs-12 col-lg-6"><img src="http://www.fitlifelucy.com/wp-content/uploads/2016/10/fitlifelucy.png"/>
    <h2>Bienvenida!</h2>
    <input id="emailLogin" type="text" placeholder="Email"/> </br>
    <input id="contraseñaLogin" type="password" placeholder="Password"/> </br>
    <button id="btnLogin">Log in</button>
    <div>
    <button id="btnLogOut"> Cerrar sesion  </button>
    </div>
    <h2>Tambien puedes ingresar con ...</h2>
    <a id="btnFacebook"><img src="../images/facebook.png" alt=""/></a> 
    <a id="btnGoogle"><img src="../images/google.png" alt=""/></a>
    <h2>No tienes un cuenta? <a id="register"> REGISTRATE!</a> </h2>
    <h2>Bienvenida!</h2>
    <input id="emailRegister" type="text" placeholder="Email"/> </br>
    <input id="contraseñaRegister" type="password" placeholder="Password"/> </br>
    <button id="btnRegister">¡Registrate!</button>   
    </div>`
    ;
    CreateChildNode.innerHTML = Content;

    const btnRegister = CreateChildNode.querySelector('#btnRegister')
    btnRegister.addEventListener('click', register)

    const btnLogIn = CreateChildNode.querySelector('#btnLogin')
    btnLogIn.addEventListener('click', logear)
    
    const btnLogOut = CreateChildNode.querySelector('#btnLogOut')
    btnLogOut.addEventListener('click', out)

    const btnGoogle = CreateChildNode.querySelector('#btnGoogle')
    btnGoogle.addEventListener('click', google)

    const btnFacebook = CreateChildNode.querySelector('#btnFacebook')
    btnFacebook.addEventListener('click', facebook)


return CreateChildNode
}