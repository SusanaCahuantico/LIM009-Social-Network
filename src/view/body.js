import {post} from '../view-controller/promises.js'
export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content =`
    <body>
    <div class="bodyTmp">
        <form class="formulario" action="">
            <input type="text" id="tareaInput" placeholder="Agrega tu tarea">
            <input type="button" class="boton" id="btn-agregar" value="Agregar Tarea">
        </form>
        <div class="wrap">
        </div>
        </div>
  </body>
` ;
CreateChildNode.innerHTML = Content;

const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
botonAgregar.addEventListener('click', post)

return CreateChildNode
}