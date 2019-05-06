// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const ElementoPadre = document.getElementById('padre'); 

const  Home =  (nodoPadre)=>{
    const createNodoHijoDiv = document.createElement("div");
    const contenido = `<div class = "col-xs-12 col-lg-6"><img src="http://purelytwins.com/wp-content/uploads/2013/03/purely-fit-life-logos-600px3.png"/></div>
    <div class = "col-xs-12 col-lg-6"><img src="http://www.fitlifelucy.com/wp-content/uploads/2016/10/fitlifelucy.png"/>
    <h2>Bienvenida!</h2>
    <input id="email" type="text" placeholder="Email"/> </br>
    <input id="contraseña" type="password" placeholder="Password"/> </br>
    <button id="btnLogIn">Log in</button>
    <h2>Puedes ingresar con ...</h2>
    <img src="https://cdn.icon-icons.com/icons2/726/PNG/128/instagram_f_icon-icons.com_62685.png" alt=""/> 
    <img src="https://cdn.icon-icons.com/icons2/413/PNG/128/Facebook_41212.png" alt=""/>
    <h2>No tienes un cuenta? REGISTRATE!</h2></div>
    `;
    createNodoHijoDiv.innerHTML = contenido;
    nodoPadre.appendChild(createNodoHijoDiv);
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
    document.getElementById('btnLogIn').addEventListener('click', ()=>{
        registrar(email, password);
    })
}

Home(ElementoPadre);


const config = {
  apiKey: "AIzaSyCgb94pgigbqGXrUFHgHBz3VnAhY6zeovk",
  authDomain: "social-network-a964e.firebaseapp.com",
  databaseURL: "https://social-network-a964e.firebaseio.com",
  projectId: "social-network-a964e",
  storageBucket: "social-network-a964e.appspot.com",
  messagingSenderId: "462994625297"
};
firebase.initializeApp(config);





// const ingreso = () => {
//     const email2 = document.getElementById('email2').value;
//     const password2 = document.getElementById('contraseña2').value;

//     firebase.auth().signInWithEmailAndPassword(email2, password2)
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//       // ...
//     }); 
//   }



// // Configura un observador de estado de autenticación y obtén datos del usuario  
// const observador = () => {
//     // Si existe algun cambio de usuario o alguien se registro:
//     firebase.auth().onAuthStateChanged(function(user) {
//         // Va ejecutar este, que si existe el usuario:
//         if (user) {
//             console.log('existe usuario activo');
//           // User is signed in.
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//           // Sino existe Ejecuta esto:
//         } else {
//           // User is signed out.
//           console.log('No existe el usuario');
//           // ...
//         }
//       });

// }
// observador();

// const aparece = () => {
//     const contenido = document.getElementById('contenido');
//     contenido.innerHTML = "Solo lo ve usuario activo";
// }

