import {agregarNota, eliminarNota, promisePost} from '../view-controller/promises.js';
// import {dataPost} from '../controller/firebase.js'
// import {editarPost} from '../controller/firebase.js'

const eliminarPost = (post) => {
    const divWrap = document.createElement('div');
    divWrap.innerHTML += 
    `
    <textarea readonly id="area">${post.nota}</textarea>   
    <button id="btn-eliminar-${post.id}"> Eliminar </button>
    <button id="btn-editar-${post.id}"> Editar </button>
    <button id="btn-guardar"> Guardar </button>
    `
    divWrap.querySelector(`#btn-eliminar-${post.id}`)
    .addEventListener('click', () => eliminarNota(post));

    divWrap.querySelector(`#btn-editar-${post.id}`)
    .addEventListener('click', () => {
    document.getElementById('area').readOnly = false;
    console.log('estoy editando')

    divWrap.querySelector('#btn-guardar')
    .addEventListener('click', () => {
        promisePost(post);
       // nuevaNota(post);
    })  
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
    divPainter.appendChild(eliminarPost(post));

    });
return CreateChildNode
}
