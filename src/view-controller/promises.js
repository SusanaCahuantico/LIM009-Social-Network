import { NewUsers,LogUsers,SingOut,LogGoogle,LogFacebook } from "../controller/logins.js";

// Promesa logueo:  
  export const logear = () => {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('contraseñaLogin').value;
LogUsers(email, password)
.then(()=>console.log("Entrando"))
.catch(function(error) {
      alert("Usuario o contraseña invalida");
      
    }); 
  }
  
// Registrar usuario:
export const register = () => {
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('contraseñaRegister').value;
NewUsers(email, password)
.then(()=>console.log("Registrado"))
.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    }); 
  }
  
    // Promesa Google:
      export const google = () => {
        LogGoogle()
        .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        })
        };
     
    // Promesa facebook:
        export const facebook = () => {
        LogFacebook()
        .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        })
        };

  // Cerrar sesión:

  export const out =() => {
    SingOut()
    .then(function(){
      console.log("Saliendo")
    })
    .catch(function(error){
      console.log(error)
    })
  }
