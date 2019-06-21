import { NewUsers, LogUsers, signOut, LogGoogle, LogFacebook, dataBase, dataPost, deletePost, editarPost, updateUser} from "../controller/firebase.js";
import{  changeTmp, changeView} from './routes.js'

// Promesa logueo:  
export const logear = () => {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('contraseñaLogin').value;
  LogUsers(email, password)
    .then(() => console.log("Entrando"))
    .catch(function (error) {
      alert("Usuario o invalido");

    });
}

// Registrar usuario:
export const register = () => {
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;
  const lastName = document.getElementById('lastName').value;
  const name = document.getElementById('name').value;
  NewUsers(email, password)
    .then(() => dataBase(name, lastName, email))
     alert ('registrado')
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}


// Cerrar sesión:
export const out = () => {
  signOut()
    .then(function () {
      console.log("Saliendo")
    })
    .catch(function (error) {
      console.log(error)
    })
}


export const google = () => {
  LogGoogle()
    .then((result) => {
      changeView('#/perfil')
      var token = result.accessToken;
      var user = result.user;
    })
    .catch((error) => {     
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
    })
};

export const facebook = () => {
  LogFacebook()
    .then(function (result) {
       let token = result.credential.accessToken;
      let user = result.user;
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    })
};

export const agregarNota = () =>{
const tareaInput = document.getElementById('tareaInput').value;
const estados = document.getElementById('estado').value;
dataPost(tareaInput,estados)
.then((data) => {
  data.message = 'Nota agregada'
}).catch((data) => {
  data.message = 'Lo sentimos, no se agregar la nota';
})
}

// export const agregarEstado = () =>{
//   const estado = document.getElementById('estado').value;
//   dataPost(estado)
//   .then((data) => {
//     data.message = 'Nota agregada'
//   }).catch((data) => {
//     data.message = 'Lo sentimos, no se agregar la nota';
//   })
//   }

export const eliminarNota = (post) => {
  deletePost(post.id)
}

// Editar post:
export const nuevaNota = (post, nota) =>{
  editarPost(post, nota)
  .then((data) => {
    data.message = 'Nota agregada'
  })
  .catch((data) => {
    data.message = 'Lo sentimos, no se agregar la nota';
  })
  }

/* Privacidad: */
// export const privacidadPost = (post, nuevoEstado) => {
//   estadoPost(post, nuevoEstado)
//   if(currentUser().uid === post.idUser){
//   privaciPost(post.id, nuevoEstado)
//   }
// }

export const updateUserPerfil = (user,name) =>{      
  updateUser(user.idUser,name);    
}

export const promiseObs = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(email)
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('usuario no activo')
      // ...
    }
  });
}