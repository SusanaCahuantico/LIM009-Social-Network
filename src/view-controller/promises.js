import { NewUsers, LogUsers, SingOut, LogGoogle, LogFacebook, DataBase, dataPost } from "../controller/firebase.js";
// import firebase = require("firebase");

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
    .then(() => DataBase(name, lastName, email))
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
  SingOut()
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

export const post = () => {
  const tareaInput = document.getElementById('tareaInput').value;
  dataPost(tareaInput)
}