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
export const dataPost = (uid, name, textPost, modoPost, date) => {
   return firebase.firestore().collection("notas").add ({
      uid: uid,
      name: name,
   nota: textPost,
   state: modoPost,
   date: date,
})
}
   
//Leer documentos   
export const getPost = (callback) => {
   firebase.firestore().collection("notas").orderBy('date', 'desc')
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

  /* editar notas: */
   export const editarPost = (idPost, postText, modePost) => {
   return firebase.firestore().collection("notas").doc(idPost).update({
   nota: postText,
   state: modePost,
   })
   }
   
   //Agregar usuarios:
   export const dataBase = (cred) => {
   return firebase.firestore().collection("users").doc(cred.user.uid).set({
   name: cred.user.displayName,
   });
   }
   
//Usuario activo:
export const usuarioActivo = () => {
   return firebase.auth().currentUser;
}
   
//observador:
export const observador = (userA) => {
   return firebase.auth().onAuthStateChanged(userA);
}

export const db = () => {
   return firebase.firestore();
}