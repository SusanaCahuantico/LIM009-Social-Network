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
  <div class = "general">
   <div class="i general">
           <img class ="portada" src ="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
           <div class="general">
            <p id="painterPhoto"></p>
            <p id="painter" class="painter-user"></p>
           </div>
    </div>
    <div class="caja general"> 
       <select id="estado">
       <option value="privado">Privado</option>
       <option value="publico">Público</option>
       </select>
       <form class="formulario" action="">
       <textarea class= "share-post line-black" type="text" id="tareaInput" placeholder="¿que estas pensando?"></textarea>
       <input type="button" id="btn-agregar" class="boton" value="Agregar Tarea">
       </form>
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
        `;
  } else {
    divPainter.innerHTML =
    ` <p> ${usuarioActivo().email} </p>`;
  }
  
  const divPainterPhoto = CreateChildNode.querySelector('#painterPhoto')
  if(usuarioActivo().photoURL){
    divPainterPhoto.innerHTML =
    `<img src="${usuarioActivo().photoURL}" class="image-user"/>`;
  } else {
    divPainterPhoto.innerHTML =
    `
    <img class="image-user" src="../images/imagen-usuario.jpg" alt="imagen usuario"/>`;
  }


  return CreateChildNode
}

const pintarPost = (post) => {
  const divWrap = document.createElement('div');
  divWrap.innerHTML += `<textarea class ="share-post" readonly id="area">${post.nota}</textarea>`
  if (usuarioActivo().uid === post.idUser)  {
    divWrap.innerHTML += `
    <div class ="general">
      <a class="boton" id="btn-eliminar-${post.id}"><img src="../images/basura.png" alt="tacho de basura"/> </a>
      <a class="boton" id='btn-editar'> <img src="../images/editar.png" alt="Editar"/> </a>
      <a class="boton" id='btn-guardar-${post.id}'> <img src="../images/descargar.png" alt="guardar"/> </a>
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
  }

  return divWrap;
}
