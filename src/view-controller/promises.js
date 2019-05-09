import { NewUsers,LogUsers,SingOut, loguearConCuentaGoogle, loguearConCuentaFacebook } from "../controller/logins.js";


export const register = () => {
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('contraseñaRegister').value;
NewUsers(email, password)
.then(()=>console.log("Registrado"))
.catch(function(error) {
      // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      // ...
      console.log(errorMessage);
      
    }); 
  }

  export const logear = () => {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('contraseñaLogin').value;
LogUsers(email, password)
.then(()=>console.log("Entrando"))
.catch(function(error) {
      // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      // ...
      console.log(errorMessage);
      
    }); 
  }


  export const out =() => {
    SingOut()
    .then(function(){
      console.log("Saliendo")
    })
    .catch(function(error){
      console.log(error)
    })
  }


  export const loguearConGoogle = () => {
    loguearConCuentaGoogle()
    .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ..
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    })
    };
    
    export const loguearConFacebook = () => {
    loguearConCuentaFacebook()
    .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    })
    };
    