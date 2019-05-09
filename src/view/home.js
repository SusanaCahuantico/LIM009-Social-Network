import { registrar, loguearConGoogle, loguearConFacebook } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="http://purelytwins.com/wp-content/uploads/2013/03/purely-fit-life-logos-600px3.png"/></div>
    <div class = "col-xs-12 col-lg-6"><img src="http://www.fitlifelucy.com/wp-content/uploads/2016/10/fitlifelucy.png"/>
    <h2>Bienvenida!</h2>
    <input id="email" type="text" placeholder="Email"/> </br>
    <input id="contraseña" type="password" placeholder="Password"/> </br>
    <button id="btnLogIn">Log in</button>
    <h2>Puedes ingresar con ...</h2>
    <a id="btn-google"><img src="../imagen/search.png" alt=""/></a>
    <a id="btn-facebook"><img src="../imagen/facebook.png" alt=""/></a>
    <h2>No tienes un cuenta?</h2> <a id='btn-registrate'>REGISTRATE!</a> <br>
    <input id="email2" type="text" placeholder="Email"/> </br>
    <input id="contraseña2" type="password" placeholder="Password"/> </br>
    </div>
    `;
    CreateChildNode.innerHTML = Content;

    
    const botonGoogle = CreateChildNode.querySelector('#btn-google')
    botonGoogle.addEventListener('click', () => {
        loguearConGoogle();
    });
    
    const botonFacebook = CreateChildNode.querySelector('#btn-facebook')
    botonFacebook.addEventListener('click', () => {
        loguearConFacebook();
    });

    const btnLogIn = CreateChildNode.querySelector('#btnLogIn')
    btnLogIn.addEventListener('click', registrar)
    
    return CreateChildNode;
    
    
}
// Home(FatherElement);