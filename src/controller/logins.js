// Registrar usuarios:

export const NewUsers = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
 };

 // iniciar Sesión:

 export const LogUsers = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
 }

 // Cerrar sesión: 

 export const SingOut = ()=> {
    return firebase.auth().SingOut();
 }

 export const LogGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
 }

 export const LogFacebook = () => {
   const provider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(provider)
<<<<<<< HEAD
   }
=======
   }

export const DataBase = (name, lastName, emailRegister) => {

   return firebase.firestore().collection("users").add ({
      Nombre : name,
      Apellido : lastName,
      Email : emailRegisters
   })
}
   
   
>>>>>>> 4b9447250195f45e5169a8f2bd31945278a01056
