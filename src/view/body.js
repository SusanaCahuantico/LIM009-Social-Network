import {agregarNota, eliminarNota} from '../view-controller/promises.js';

const postPost = (post) => {
    const divWrap = document.createElement('div');
    divWrap.innerHTML += 
    `
    <textarea readonly>${post.nota}</textarea>   
    <button id="btn-eliminar-${post.id}"> Eliminar </button>
    <button id="btn-editar"> Editar </button>
    `
    divWrap.querySelector(`#btn-eliminar-${post.id}`)
    .addEventListener('click', () => eliminarNota(post));

    divWrap.querySelector('#btn-editar')
    .addEventListener('click', () => {
        console.log('estoy editando')
    })
    return divWrap;
}

export default (posts) => {
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
    posts.forEach(post => {
    divPainter.appendChild(postPost(post));
    });
return CreateChildNode
}
