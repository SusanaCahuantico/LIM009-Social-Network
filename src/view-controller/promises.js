import { NewUsers, LogUsers, signOut, LogGoogle, LogFacebook, dataBase, dataPost, deletePost, editarPost} from "../controller/firebase.js";

// Promesa logueo:  
export const logear = () => {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('contraseñaLogin').value;
  LogUsers(email, password)
    .then(() => console.log("Entrando"))
    .catch(function (error) {
      alert("Usuario o contraseña invalida");

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
    // .then(() => #/login('hanschange')
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
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
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    })
};

export const facebook = () => {
  LogFacebook()
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    })
};

export const agregarNota = () =>{
const tareaInput = document.getElementById('tareaInput').value;
dataPost(tareaInput)
.then((data) => {
  data.message = 'Nota agregada'
}).catch((data) => {
  data.message = 'Lo sentimos, no se agregar la nota';
})
}

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
//   if(currentUser().uid === post.idUser){
//   privaciPost(post.id, nuevoEstado)
//   }
// }