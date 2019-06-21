import {agregarNota} from '../view-controller/promises.js'
import {usuarioActivo, deletePost, editarPost} from '../controller/firebase.js'

export const printPost = (posts) => {
    const CreateChildNote = document.createElement('div');
    CreateChildNote.innerHTML = '';
    const Content = 
    `
    <div class="bodyTmp">
    <select id="estado">
    <option value="privado"> Privado </option>
    <option value="publico"> Publico </option>
    </select>
    <div class="box">
    <input class="input" type="text" id="tareaInput" placeholder="¿Que quieres compartir?">
    <input type="button" id="btn-agregar" class="boton" value="Compartir">
    </div>
    </div>
    <section id="wrap">
    </section>
    `;

    CreateChildNode.innerHTML = Content;
    
    const botonAgregar = CreateChildNode.querySelector('#btn-agregar')
    botonAgregar.addEventListener('click', () => {
        agregarNota();
    });
       
    const divWrap = CreateChildNode.querySelector('#wrap')
    const user = usuarioActivo();
    posts.forEach(post => {
        if(post.state === 'publico' || post.uid === user.uid){
            divWrap.appendChild(pintarPost(post));
        }
    });   
    
    return CreateChildNode;
}

export const pintarPost = (objPost) => {
    const user = usuarioActivo()
    const divWrap = document.createElement('div');
    divWrap.innerHTML = '';
    const notas = 
     `
     <div>
     <p> Publicado por: ${objPost.name} </p>
     ${objPost.uid === user.uid ? `<button id="btn-eliminar"> <img src="../images/delete.png" data-post-id="${objPost.id}"/>
     </button> ` : ''}
     </div>
     <div id="btn-editar">
     <p> ${objPost.nota} </p>
     </div>
     <div>
     ${objPost.uid === user.uid ? `<button id="editBtn"> <img src="../images/edit.png" data-post-id="${objPost.id}" data-post-text="${objPosts.texto}" data-post-mode ="${objPosts.state}"/></button>` : ''}
     </div>
     `;
     divWrap.innerHTML += notas;

     const btnEliminar = divWrap.querySelector('#btn-eliminar');
     if(btnEliminar) {
         btnEliminar.addEventListener('click', (evento) => {
            if(objPost.uid === user.uid){
                let btnTarget = evento.target;
                let idTarget = btnTarget.getAttribute('data-post-id');
                deletePost(idTarget);
            };
         })
     }
     
     const btnEditar = divWrap.querySelector('#editBtn')
     if(btnEditar){
         btnEditar.addEventListener('click', (evento) => {
             const user = usuarioActivo();
             if(objPost.uid === user.uid){
                 const guardar = divWrap.querySelector('#btn-editar');
                 const newElement = document.createElement('textarea');
                 const select = document.createElement('select');
                 const option1 = document.createElement('option');
                 const option2 = document.createElement('option');
                 const submit = document.createElement('button');

                 option1.setAttribute("value", "privado");
                 const modoPrivado = document.createTextNode("privado");
                 option2.setAttribute("value", "publico");
                 const modoPublico = document.createTextNode("publico");

                 select.innerHTML = "visualizacion";
                 submit.innerHTML = "submit";

                 option1.appendChild(modoPrivado);
                 select.appendChild(option1);
                 option2.appendChild(modoPublico);
                 select.appendChild(option2);

                 newElement.setAttribute('id', 'editArea');
                 select.setAttribute('id', 'modo');
                 submit.setAttribute('id', 'submitEdit');
                 
                let btnTarget = evt.target;
                let idTarget = btnTarget.getAttribute('data-post-id');
                let textTarget = btnTarget.getAttribute('data-post-text');
                let modoTarget = btnTarget.getAttribute('data-post-mode');

                newElement.innerHTML = textTarget;
                guardar.appendChild(newElement);
                guardar.appendChild(submit);
                guardar.appendChild(select);

                submit.addEventListener('click', () => {
                textTarget = guardar.querySelector('#editArea').value;
                modoTarget = guardar.querySelector('#modo').value;
                editarPost(idTarget, textTarget, modoTarget);
             })
            }
        })
    } 

        return divWrap;
    }