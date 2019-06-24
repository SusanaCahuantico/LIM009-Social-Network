import {
  agregarNota,
  eliminarNota,
  nuevaNota
} from '../view-controller/promises.js';
import {
  usuarioActivo
} from '../controller/firebase.js'

export default (posts) => {
  const CreateChildNode = document.createElement("div");
  const Content =
      `
 <body>
 <div class = "col-lg-12">
 <div class="col-lg-6 caja">
 <div class="col-lg-12">
  <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZoXe7uwejc3J5qK01AS_Oy19gBBbCDQsQ030PY0JEvywRIkq"></div>
   <div class="col-lg-6" id="painterPhoto"></div>
   <div class="col-lg-6" id="painter" class="painter-user"></div>
   <div class="col-lg-6 caja"> 
   <select id="estado">
   <option value="privado">Privado</option>
   <option value="publico">Público</option>
   </select>
   <div class="box"
    <form class="formulario" action="">
     <input class = "input" type="text" id="tareaInput" placeholder="Agrega tu tarea">
     <input type="button" id="btn-agregar" class="boton" value="Agregar Tarea">
    </form>
   </div>
   <div id="wrap" class="wraper"></div>
   </div>
 </body>
`;

  CreateChildNode.innerHTML = Content;

  const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
  botonAgregar.addEventListener('click', agregarNota)

  const divWrap = CreateChildNode.querySelector('#wrap')
  posts.forEach(post => {
      divWrap.appendChild(pintarPost(post));
  });

  const divPainter = CreateChildNode.querySelector('#painter')
  divPainter.innerHTML =
      `<p>${usuarioActivo().displayName} </p>`;

  const divPainterPhoto = CreateChildNode.querySelector('#painterPhoto')
  divPainterPhoto.innerHTML =
      `<img src="${usuarioActivo().photoURL}" class="image-user"/>`;

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
    `;

  // console.log(post);

  divWrap.querySelector(`#btn-eliminar-${post.id}`)
      .addEventListener('click', () => {
          eliminarNota(post)
      });

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