import { agregarNota, eliminarNota, nuevaNota } from '../view-controller/promises.js';
import { usuarioActivo } from '../controller/firebase.js';

export default (posts) => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `
    <div class="header">
      <img class="portada" src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Portada"/>
      <div class="perfil">
        <p id="painterPhoto"></p>
        <p id="painter" class="painter-user"></p>
      </div>
    </div>
    <div class="content">
      <select id="estado" class="form-select">
        <option value="privado">Privado</option>
        <option value="publico">Público</option>
      </select>
      <form class="formulario">
        <textarea class="form-control" id="tareaInput" placeholder="¿Qué estás pensando?" rows="3"></textarea>
        <button type="button" id="btn-agregar" class="btn btn-primary">Agregar Tarea</button>
      </form>
      <div id="wrap" class="posts-container"></div>
    </div>
  `;

  const botonAgregar = container.querySelector('#btn-agregar');
  botonAgregar.addEventListener('click', agregarNota);

  const divWrap = container.querySelector('#wrap');
  posts.forEach(post => divWrap.appendChild(pintarPost(post)));

  const divPainter = container.querySelector('#painter');
  const divPainterPhoto = container.querySelector('#painterPhoto');
  const usuario = usuarioActivo();

  if (usuario.displayName) {
    divPainter.innerHTML = `<p>${usuario.displayName}</p>`;
  } else {
    divPainter.innerHTML = `<p>${usuario.email}</p>`;
  }

  if (usuario.photoURL) {
    divPainterPhoto.innerHTML = `<img src="${usuario.photoURL}" class="image-user" alt="Foto de perfil"/>`;
  } else {
    divPainterPhoto.innerHTML = `<img class="image-user" src="../images/imagen-usuario.jpg" alt="imagen usuario"/>`;
  }

  return container;
};

const pintarPost = (post) => {
  const divWrap = document.createElement('div');
  divWrap.classList.add('post-card');

  const usuario = usuarioActivo();

  divWrap.innerHTML = `
    <div class="post-header">
      <span class="post-author">Publicado por: ${post.displayName || post.email}</span>
    </div>
    <textarea class="post-content" readonly id="area-${post.id}">${post.nota}</textarea>
    <div class="post-actions">
      <button class="btn btn-danger" id="btn-eliminar-${post.id}" ${usuario.uid !== post.idUser ? 'disabled' : ''}>
        <img src="../images/basura.png" alt="Eliminar"/>
      </button>
      <button class="btn btn-warning" id="btn-editar-${post.id}" ${usuario.uid !== post.idUser ? 'disabled' : ''}>
        <img src="../images/editar.png" alt="Editar"/>
      </button>
      <button class="btn btn-success" id="btn-guardar-${post.id}" ${usuario.uid !== post.idUser ? 'disabled' : ''}>
        <img src="../images/descargar.png" alt="Guardar"/>
      </button>
    </div>
  `;

  // Solo añadir eventos si el usuario es el autor
  if (usuario.uid === post.idUser) {
    divWrap.querySelector(`#btn-eliminar-${post.id}`).addEventListener('click', () => eliminarNota(post));
    divWrap.querySelector(`#btn-editar-${post.id}`).addEventListener('click', () => {
      document.getElementById(`area-${post.id}`).readOnly = false;
    });
    divWrap.querySelector(`#btn-guardar-${post.id}`).addEventListener('click', () => {
      const nuevo = document.getElementById(`area-${post.id}`).value;
      nuevaNota(post.id, nuevo);
    });
  }

  return divWrap;
};

/*const pintarPost = (post) => {
  const divWrap = document.createElement('div');
  divWrap.classList.add('post-card');

  const usuario = usuarioActivo();

  divWrap.innerHTML = `
    <div class="post-header">
      <span class="post-author">Publicado por: ${post.displayName || post.email}</span>
    </div>
    <textarea class="post-content" readonly id="area-${post.id}">${post.nota}</textarea>
    ${usuario.uid === post.idUser ? `
      <div class="post-actions">
        <button class="btn btn-danger" id="btn-eliminar-${post.id}">
          <img src="../images/basura.png" alt="Eliminar"/>
        </button>
        <button class="btn btn-warning" id="btn-editar-${post.id}">
          <img src="../images/editar.png" alt="Editar"/>
        </button>
        <button class="btn btn-success" id="btn-guardar-${post.id}">
          <img src="../images/descargar.png" alt="Guardar"/>
        </button>
      </div>
    ` : ''}
  `;

  if (usuario.uid === post.idUser) {
    divWrap.querySelector(`#btn-eliminar-${post.id}`).addEventListener('click', () => eliminarNota(post));
    divWrap.querySelector(`#btn-editar-${post.id}`).addEventListener('click', () => {
      document.getElementById(`area-${post.id}`).readOnly = false;
    });
    divWrap.querySelector(`#btn-guardar-${post.id}`).addEventListener('click', () => {
      const nuevo = document.getElementById(`area-${post.id}`).value;
      nuevaNota(post.id, nuevo);
    });
  }

  return divWrap;
};
*/