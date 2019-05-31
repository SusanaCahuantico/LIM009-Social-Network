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
   }

export const DataBase = (name, lastName, emailRegister) => {
   return firebase.firestore().collection("users").add ({
      Nombre : name,
      Apellido : lastName,
      Email : emailRegister
   })
}

export const dataPost = (content) => {
   return firebase.firestore().collection('notas').add ({
      nota: content
   })
}

export const getPerfil = (node) => {
   firebase.firestore().collection('users').onSnapshot(querySnapshot => {
      const painter = node.querySelector('#painter');
         painter.innerHTML = '';
         querySnapshot.forEach(doc => {
            const data = doc.data();
            painter.innerHTML += `
            <div>
            <p>${data.Nombre}</p>
            <p>${data.Apellido}</p>
            <div>
            `;
         });
      })
}

export const getPost = (node) => {
   firebase.firestore().collection('notas').onSnapshot(querySnapshot => {
      const wrap = node.querySelector('#wrap');
      wrap.innerHTML = '';
      querySnapshot.forEach(doc => {
         const data = doc.data();
         wrap.innerHTML += `
         <div>         
            <textarea>${data.nota}</textarea>
         </div>   
         `;
      });
   })
}
