// Loguear con cuenta Google

export const LogGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}
// Loguear con cuenta faceboook:

export const LogFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}
// Registrar nuevo usuario:

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

