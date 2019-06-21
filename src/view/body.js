import {agregarNota, eliminarNota, nuevaNota} from '../view-controller/promises.js';

export default (user, posts) => {
  const CreateChildNode = document.createElement("div");
  const userDefined = user;
  const Content =
  `
   <body>
     <div class="bodyTmp">
     <div id="painter">
     <p> ${userDefined.name}</p>
     </div>
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
   </body>
  ` ;
    CreateChildNode.innerHTML = Content;
    
    const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
    botonAgregar.addEventListener('click', agregarNota)
       
    const divWrap = CreateChildNode.querySelector('#wrap')
    posts.forEach(post => {
      divWrap.appendChild(pintarPost(post));

    
    const divPainter = CreateChildNode.querySelector('#painter')
      divPainter.appendChild(pintarUsuario(user));

    /*privacidad:
    const divModoPost = CreateChildNode.querySelector('estado')
    divModoPost.addEventListener('change', () => {
      const nuevoEstado = divModoPost.value;
      privacidadPost(posts, nuevoEstado)
    });
    */
    return CreateChildNode
  } 

   const pintarUsuario = (user) => {
     const divUser = document.createElement('div');
     const userDefined= user;
          usuario.innerHTML = `
          <div>
          <p id="idUser"> ${userDefined.Nombre} </p>
          </div>
          `;
      return divUser;    
   }

   const pintarPost = (post) => {
     const divWrap = document.createElement('div');
     const posit = post;
     divWrap.innerHTML += 
      `
       <textarea readonly id="area" class="post-nota">${posit.nota}</textarea>   
       <button class="boton" id="btn-eliminar-${posit.id}"> Eliminar </button>
       <button class="boton" id='btn-editar'> Editar </button>
       <button class="boton" id='btn-guardar-${posit.id}'> Guardar </button>
      `
      divWrap.querySelector(`#btn-eliminar-${posit.id}`)
      .addEventListener('click', () => eliminarNota(posit));
  
     divWrap.querySelector('#btn-editar')
      .addEventListener('click', () => {
       document.getElementById('area').readOnly = false;
       });
          
      divWrap.querySelector(`#btn-guardar-${posit.id}`)
      .addEventListener('click', () => {
      const nuevo = document.getElementById('area').value;
      nuevaNota(posit.id,nuevo)
  });
      
   return divWrap;
}