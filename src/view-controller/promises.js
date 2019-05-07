import { NewUsers } from "../controller/logins.js";

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
