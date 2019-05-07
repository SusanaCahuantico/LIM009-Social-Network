import { registrar } from "../view-controller/promises.js";

export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content = `<div class = "col-xs-12 col-lg-6"><img src="http://purelytwins.com/wp-content/uploads/2013/03/purely-fit-life-logos-600px3.png"/></div>
    <div class = "col-xs-12 col-lg-6"><img src="http://www.fitlifelucy.com/wp-content/uploads/2016/10/fitlifelucy.png"/>
    <h2>Bienvenida!</h2>
    <input id="email" type="text" placeholder="Email"/> </br>
    <input id="contraseña" type="password" placeholder="Password"/> </br>
    <button id="btnLogIn">Log in</button>
    <h2>Puedes ingresar con ...</h2>
    <img src="https://cdn.icon-icons.com/icons2/726/PNG/128/instagram_f_icon-icons.com_62685.png" alt=""/> 
    <img src="https://cdn.icon-icons.com/icons2/413/PNG/128/Facebook_41212.png" alt=""/>
    <h2>No tienes un cuenta? REGISTRATE!</h2></div>
    `;
    CreateChildNode.innerHTML = Content;

    const btnLogIn = CreateChildNode.querySelector('#btnLogIn')
    btnLogIn.addEventListener('click', registrar)

return CreateChildNode
}
// Home(FatherElement);