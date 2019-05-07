import { NewUsers,LogUsers,SingOut } from "../controller/logins.js";

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