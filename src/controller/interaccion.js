
export const cargarPerfil = (fotoUsuario, nombreUsuario) => {
    return firebase.firestore().collection('publicaciones').add({
        foto: fotoUsuario,
        nombre: nombreUsuario,
    })
}

/*
firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/