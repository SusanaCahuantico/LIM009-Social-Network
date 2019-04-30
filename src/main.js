// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

const registrar = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  registrar();

const ingreso = () => {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('contraseña2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    }); 
  }
ingreso();
 // Configura un observador de estado de autenticación y obtén datos del usuario  
const observador = () => {
    // Si existe algun cambio de usuario o alguien se registro:
    firebase.auth().onAuthStateChanged(function(user) {
        // Va ejecutar este, que si existe el usuario:
        if (user) {
            console.log('existe usuario activo');
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // Sino existe Ejecuta esto:
        } else {
          // User is signed out.
          console.log('No existe el usuario');
          // ...
        }
      });
      
}
observador();
 
const aparece = () => {
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = "Solo lo ve usuario activo";
}
// myFunction();