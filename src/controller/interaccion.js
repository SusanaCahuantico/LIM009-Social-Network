export const DataBase = (name, lastName, emailRegister) => {

    return firebase.firestore().collection("users").add ({
       Nombre : name,
       Apellido : lastName,
       Email : emailRegister
    })
 }


export const AddNotes = (list) =>{
    
    return firebase.firestore().collection('notas').add({   
        Estado: list
})
}

