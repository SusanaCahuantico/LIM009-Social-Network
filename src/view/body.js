import { agregarNota, eliminarNota, nuevaNota } from '../view-controller/promises.js';
import { usuarioActivo } from '../controller/firebase.js'
export default (posts) => {
  const CreateChildNode = document.createElement("div");
  const Content =
    `
   <body>
     <div class="col-lg-6">
     <div class="col-lg-12">
     <img src="https://img2.rtve.es/imagenes/portada/1432816715593.jpg">
     </div>
     <div class="col-lg-6">
     <img src="data:image/png;base64,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">
     </div>
     <div class="col-lg-6">
     <p>Nombre ususario</div>
     </div>
     </div>
     <div class="col-lg-6">
     <div id="painter"></div>
     <select id="estado">
     <option value="privado">Privado</option>
     <option value="publico">Público</option>
     </select>
     <div class="box"
     <form class="formulario" action="">
     <input class = "input" type="text" id="tareaInput" placeholder="Agrega tu tarea">
     <input type="button" id="btn-agregar" class="boton" value="Agregar Tarea">
     </form>
     <div id="wrap">
     </div>
     </div>
     </div>
     </div>
   </body>
  ` ;

  CreateChildNode.innerHTML = Content;

  const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
  botonAgregar.addEventListener('click', agregarNota)

  const divWrap = CreateChildNode.querySelector('#wrap')
  posts.forEach(post => {
    divWrap.appendChild(pintarPost(post));
  });

  const divPainter = CreateChildNode.querySelector('#painter')
  divPainter.innerHTML = `
  ${usuarioActivo().displayName }
  `;


  return CreateChildNode
}

const pintarPost = (post) => {
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
      nuevaNota(post.id, nuevo)
    });

  return divWrap;
}