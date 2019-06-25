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
 <div class = " df col-lg-12 col-xs-12">
 <div class="col-lg-6 col-xs-12 caja boxBig">
 <div class class="col-lg-12 bordes">
 <div class="col-lg-12 col-xs-12">
  <img class ="portada" src ="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>
   <div class="col-lg-6 col-xs-6" id="painterPhoto"></div>
   <div class="col-lg-6 col-xs-6" id="painter" class="painter-user"></div>
   </div>
   <div class="col-lg-6 col-xs-12 caja"> 
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
  //console.log(usuarioActivo().uid);
  if(usuarioActivo().displayName){
    
    divPainter.innerHTML =
        `<p>${usuarioActivo().displayName} </p>
        <p> ${usuarioActivo().uid} </p>
        `;
  } else {
    divPainter.innerHTML =
    `
    <p> ${usuarioActivo().email} </p>`;
  }
  
  const divPainterPhoto = CreateChildNode.querySelector('#painterPhoto')
  divPainterPhoto.innerHTML =
  `<img src="${usuarioActivo().photoURL}" class="image-user"/>`
  ;
  

  return CreateChildNode
}

const pintarPost = (post) => {
  const divWrap = document.createElement('div');
  divWrap.innerHTML +=
      `
      <textarea readonly id="area">${post.nota}</textarea>   
      <div class="col-lg-12 col-xs-12">
      <button class="boton col-lg-4 col-xs-4" id='btn-eliminar-${post.id}'>Eliminar</button>
      <button class="boton col-lg-4 col-xs-4" id='btn-editar'>Editar</button>
      <button class="boton col-lg-4 col-xs-4" id='btn-guardar-${post.id}'>Guardar</button>
      </div>
    `;

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
/* divWrap.innerHTML +=
`
<textarea readonly id="area">${post.nota}</textarea>`  
if (usuarioActivo().uid === post.idUser){
  `
  <button class="boton" id="btn-eliminar-${post.id}"></button>
  <button class="boton" id='btn-editar'> Editar </button>
  <button class="boton" id='btn-guardar-${post.id}'> Guardar </button>
 `;}  
 */