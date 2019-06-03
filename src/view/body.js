import {post} from '../view-controller/promises.js'
import { getPost, getPerfil, DataBase } from '../controller/firebase.js';

export default () => {
    const CreateChildNode = document.createElement("div");
    const Content =`
    <body>
    <div class="bodyTmp">
        <div id="painter">
        </div>
        <form class="formulario" action="">
            <input type="text" id="tareaInput" placeholder="Agrega tu tarea">
            <input type="button" class="boton" id="btn-agregar" value="Agregar Tarea">
        </form>
        <div id="wrap">
         <div>         
            <textarea>${data.nota}</textarea>
            <button id="btn-delete-${doc.id}"> Eliminar </button>
            <button id="btn-edit-${doc.id}"> Editar </button>
         </div>   
        
        </div>
        </div>
  </body>
` ;
CreateChildNode.innerHTML = Content;

const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
botonAgregar.addEventListener('click', post)
getPost(CreateChildNode)

const divPainter = CreateChildNode.querySelector('#painter')
divPainter.innerHTML = DataBase;
getPerfil(CreateChildNode)
return CreateChildNode
}