import { iniciarSesion, NewUsers, loguearConCuentaGoogle, loguearConCuentaFacebook } from "../controller/logins.js";

// Iniciar sesión usuario:
export const iniciarSesionUsuario = () => {
  const email2 = dodument.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;
  iniciarSesion(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}

export const registrar = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;
NewUsers(email, password)
.then(()=>console.log("si se pudo"))
.catch(function(error) {
      // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      // ...
      console.log(errorMessage);
      
    }); 
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