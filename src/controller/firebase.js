// Registrar usuarios:
export const NewUsers = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
 };

 // iniciar Sesión:
 export const LogUsers = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
 }

 // Cerrar sesión: 
 export const signOut = () => firebase.auth().signOut()

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
   export const dataPost = (content) => {
      return firebase.firestore().collection("notas").add ({
         nota: content,
      })
   }
   
//Leer documentos   
  export const getPost = (callback) => {
   firebase.firestore().collection("notas")
   .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        doc.privacidad === 'publico '
         data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
   });
} 

//Eliminar notas:
 export const deletePost = (idPost) => {
    return firebase.firestore().collection("notas").doc(idPost).delete()
}
   
//Agregar usuarios:
export const dataBase = (name, lastName, emailRegister) => {
      return firebase.firestore().collection("users").add ({
         Nombre : name,
         Apellido : lastName,
         Email : emailRegister,
      })
}

/* editar notas: */
export const editarPost = (idPost, nuevo) => {
   return firebase.firestore().collection("notas").doc(idPost).update({
     nota: nuevo,  
})
}

export const estadoPost = (idPost, nuevoEstado) => {
   return firebase.firestore().collection("notas").doc(idPost).update({
     estado: nuevoEstado,  
})
}
