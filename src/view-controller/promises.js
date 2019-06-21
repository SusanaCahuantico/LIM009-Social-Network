import { NewUsers, LogUsers, signOut, LogGoogle, LogFacebook, dataPost, usuarioActivo, db, dataBase} from "../controller/firebase.js";

// Promesa logueo:  
export const logear = () => {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('contraseñaLogin').value;
  LogUsers(email, password)
    .then(() => changeRoute('#/perfil'))
    .catch(() => {
      alert("Usuario invalido");
    });
}

// Registrar usuario:
export const register = () => {
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;
  //const lastName = document.getElementById('lastName').value;
  const name = document.getElementById('name').value;
  NewUsers(email, password)
    .then((cred) => {
      return db().collection('users').doc(cred.user.uid).set({
        nameToSave
      })
    })
    .then (() => signOut())
    .then(() => changeRoute("#/home"))
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
  .then(dataBase)
  .then(() => {
    changeRoute("#/profile");
  })
};

export const facebook = () => {
  LogFacebook()
  .then(dataBase)
  .then(() => {
    changeRoute('#/profile');
  })
};

export const agregarNota = () =>{
const tareaInput = document.getElementById('tareaInput').value;
const estados = document.getElementById('estado').value;
const user = usuarioActivo();
getName(user)
.then((name) => {
  dataPost(user.uid, name, tareaInput,estados, new Date());
})
.then((data) => {
  data.message = 'Nota agregada'
}).catch((data) => {
  data.message = 'Lo sentimos, no se agregar la nota';
})
}

export const getName = (user) => {
  if (user) {
    if(user.providerData[0].providerId != 'password'){
      return {
        then:(cb) => {
          cb(user.displayName)
        }
      }
    } else {
      return db().collection('users').doc(user.uid).get()
      .then((doc) => {
        return doc.data().name;
      })
    }
  }
};

export const changeRoute = (route) => {
  location.hash = route;
};