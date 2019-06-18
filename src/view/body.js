import {agregarNota, eliminarNota, nuevaNota, privacidadPost} from '../view-controller/promises.js';

const eliminarPost = (post) => {
    const divWrap = document.createElement('div');
    divWrap.innerHTML += 
    `
    <textarea readonly id="area">${post.nota}</textarea>   
    <button class="boton" id="btn-eliminar-${post.id}"> Eliminar </button>
    <button class="boton" id='btn-editar'> Editar </button>
      <button class="boton" id='btn-guardar-${post.id}'> Guardar </button>
    `
    divWrap.querySelector(`#btn-eliminar-${post.id}`)
    .addEventListener('click', () => eliminarNota(post));

    divWrap.querySelector('#btn-editar')
    .addEventListener('click', () => {
    document.getElementById('area').readOnly = false;
    });
    
    divWrap.querySelector(`#btn-guardar-${post.id}`)
    .addEventListener('click', () => {
        const nuevo = document.getElementById('area').value;
        nuevaNota(post.id,nuevo)
    });

    return divWrap;
}

export default (posts) => {
    const CreateChildNode = document.createElement("div");
    const Content =`
    <body>
    <div class="bodyTmp">
    <div id="painter">
    </div>
    <select id="estado-${posts.id}">
    <option value="privado">Privado</option>
    <option value="publico">Público</option>
    </select>
    <form class="formulario" action="">
    <input class = "input" type="text" id="tareaInput" placeholder="Agrega tu tarea">
    <input type="button" id="btn-agregar" class="boton" value="Agregar Tarea">
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
    
    //privacidad:
    const divModoPost = CreateChildNode.querySelector(`#estado-${posts.id}`)
    divModoPost.addEventListener('change', () => {
      const nuevoEstado = divModoPost.value;
      privacidadPost(posts, nuevoEstado)
    });
return CreateChildNode
}
