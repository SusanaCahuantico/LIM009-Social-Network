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
    .then((cred) => dataBase(name, lastName, email, cred.user.uid))
     alert ('registrado')
    // .then(() => exit())
    //.then(() => changeView)
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
    .then((result) => {
      var token = result.credential.accessToken;
      console.log(token);
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
export const privacidadPost = (post, nuevoEstado) => {
  editarPost(post, nuevoEstado)
  if(currentUser().uid === post.idUser){
  privaciPost(post.id, nuevoEstado)
  }
}

//Agregar post:
export const dataPost = (content,uid, name, modoPost) => {
  return firebase.firestore().collection("notas").add ({
  nota: content,
  userId: uid,
  name: name,
  estado: modoPost,
  })
  }

  //Leer documentos 
export const getPost = (callback) => {
  firebase.firestore().collection("notas")
  .onSnapshot((querySnapshot) => {
  const data = [];
  querySnapshot.forEach((doc) => {
  doc.privacidad === 'publico '
  data.push({ id: doc.id, ...doc.data() })
  });
  callback(data);
  });
  } 

  //Agregar usuarios:
export const dataBase = (Nombre, lastName, emailRegister, cred) => {
  return firebase.firestore().collection("users").doc(cred.user.uid).set({
  Nombre : Nombre,
  Apellido : lastName,
  Email : emailRegister,
  name: cred.user.displayName,
  });
  }

// imprimir usuario:
export const getUserFirestore = (uid) => {
  return firebase.firestore().collection("users").doc(uid).get();
  }
  
  //Leer documento usuario:
  export const getUser = (uid, callback) => {
  firebase.firestore().collection("users").doc(uid)
  .onSnapshot(doc => {
  const data = doc.data();
  callback(data)
  });
  }
  
  //Usuario activo:
  export const usuarioActivo = () => {
  return firebase.auth().currentUser;
  }
  
  //observador:
  export const observador = (obs) => {
  return firebase.auth().onAuthStateChanged(obs);
  }
  