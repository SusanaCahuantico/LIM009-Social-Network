// iniciar sesión:

export const iniciarSesion = () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}
// Loguear con cuenta Google

export const loguearConCuentaGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}
// Loguear con cuenta faceboook:

export const loguearConCuentaFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}
// Registrar nuevo usuario:

export const NewUsers = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
 };

 export const LogUsers = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
 }

 export const SingOut = ()=> {
    return firebase.auth().SingOut();
 }

