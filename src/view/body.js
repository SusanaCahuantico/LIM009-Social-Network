import { getPost } from '../controller/firebase.js';
import {agregarNota, eliminarNota} from '../view-controller/promises.js';

const notitas = () => {
    const createElementNota = document.createElement("div");
    const content = `
    <textarea>${post.nota}</textarea>   
    <button id="btn-eliminar-${post.id}"> Eliminar </button>
    <button id="btn-editar"> Editar </button>
    `;
    createElementNota.innerHTML = content;


    return createElementNota;
}

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
    </div>
    </div>
    </body>
    ` ;
    CreateChildNode.innerHTML = Content;
    
    const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
    botonAgregar.addEventListener('click', agregarNota)
    
    const divPainter = CreateChildNode.querySelector('#wrap')
    getPost(posts => {
        posts.forEach(post => {
           console.log(post.id)
            divPainter.appendChild
            const btnEliminar = document.querySelector(`#btn-eliminar-${post.id}`)
            btnEliminar.addEventListener('click', () => {
                eliminarNota(post.id)
            })
}); 
});
return CreateChildNode
}
