import { notes } from "../view-controller/promises.js";
export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content =`
    <body>
    <div class="bodyTmp">
        <form class="formulario" action="">
            <input type="text" id="tareaInput" placeholder="Agrega tu tarea">
            <input type="button" id="btnAgregar" value="Agregar Tarea">
        </form>
    <div class="wrap">
        <ul>
            <li id="list"></li>
        </ul>
        </div>
  </body>
` ;
CreateChildNode.innerHTML = Content;

const btnLogIn = CreateChildNode.querySelector('#btnAgregar')
    btnLogIn.addEventListener('click', notes)


return CreateChildNode
}