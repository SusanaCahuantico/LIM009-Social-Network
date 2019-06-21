import { register } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="../images/logo.png" alt=""/></div>
    <div class = "col-xs-12 col-lg-6"><img src="../images/titulo.PNG" alt=""/>
    <div class ="contenedor">
    <h2>¡Empecemos con tu registro!</h2>
    <input class ="input" id="name" type="text" placeholder="Nombre"/> </br>
    <input class ="input" id="lastName" type="text" placeholder="Apellido"/> </br>
    <input class ="input" id="emailRegister" type="text" placeholder="Email"/> </br>
    <input class ="input" id="passwordRegister" type="password" placeholder="Password"/> </br>
    <a href="#/perfil"><button class ="botonInicio" id="btnRegister">¡Registrate!</button></a> 
    </div>
    </div>`
    ;
    CreateChildNode.innerHTML = Content;

    const btnRegister = CreateChildNode.querySelector('#btnRegister')
    btnRegister.addEventListener('click', register)

    return CreateChildNode
}