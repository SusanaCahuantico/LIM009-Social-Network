// Registrar usuarios:
export const NewUsers = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
 };

// iniciar Sesión:
 export const LogUsers = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
 }

// Cerrar sesión: 
 export const singOut = ()=> {
    return firebase.auth().singOut();
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
   export const dataPost = ( content, privacidad, date) => {
      return firebase.firestore().collection("notas").add ({
        // idUser: idUser,
         nota: content,
         privacidad: privacidad,
         date: date,
      });
   }
   
//Leer documentos   
  export const getPost = (callback) => {
   firebase.firestore().collection("notas")
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
    return firebase.firestore().collection("notas").doc(idPost).delete()
}
   
/* editar notas: */
export const editarPost = (idPost, nuevo) => {
   return firebase.firestore().collection("notas").doc(idPost).update({
      nota: nuevo,  
   })
}

/* Privacidad del post*/
export const privaciPost = (idPost, nuevoEstado) =>{
   return firebase.firestore().collection('notas').doc(idPost).update({
      privacidad : nuevoEstado, 
   });
}

/* Callback privacidad: 
export const getPublicPosts = (callback)=>{
   firebase.firestore().collection('notas').where("privacidad","==","publico").orderBy("date","desc")
   .onSnapshot(querySnapshot=>{
      let posts =[];
      querySnapshot.forEach((doc) => {
         posts.push({id: doc.id,...doc.data()});                
      });   
      callback(posts);  
   })
}
*/
// Usuario activo:
export const currentUser = () => firebase.auth().currentUser;

// Observador de usuario:
export const observador = () => firebase.auth().onAuthStateChanged();

// Agregar usuarios:
export const dataBase = ( name, lastName, emailRegister) => {
      return firebase.firestore().collection("users").doc(uid).add({
        // idUser: uid,
         Nombre : name,
         Apellido : lastName,
         Email : emailRegister,
      })
}