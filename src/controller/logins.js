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

export const getPost = () => {
const father = document.getElementById('father');
return firebase.firestore().collection("post").get()
.then(function(querySnapshot) {
   father.innerHTML = '';
   querySnapshot.forEach(function(doc) {
       console.log( `${doc.id} => ${doc.data().nota}`);
       father.innerHTML += `
       <div>
       <img src=${doc.URL}/>
       <p> ${doc.data().nota}</p>
       </div>
       `
   });
 });
}

