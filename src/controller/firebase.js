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

 //Login con google
 export const LogGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
 }

 //Login con facebook
 export const LogFacebook = () => {
   const provider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(provider)
   }

//Agregar post:
   export const dataPost = (idNote, content) => {
      return firebase.firestore().collection('notas').add ({
         nota: content,
         idPost: idNote,
         //gilberta  
      })
   }
   
//Leer documentos   
  export const getPost = (callback) => {
   firebase.firestore().collection('notas')
   .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
         data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
   });
} 

//Eliminar notas:
 export const deletePost = (idPost) => {
    return firebase.firestore().collection('notas').doc(idPost).delete()
}
   
   //Agregar usuarios:
   export const dataBase = (name, lastName, emailRegister) => {
      return firebase.firestore().collection("users").add ({
         Nombre : name,
         Apellido : lastName,
         Email : emailRegister,
        // Mensaje: mensajePost,
      })
   }