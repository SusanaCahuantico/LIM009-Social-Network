export const imprimirUsuario = (user) => {  
    console.log(user) 
   const formUserProfile  = document.createElement("div");
   const tmpUserProfile = `
       <div>
           <h3 id="">${user.name}</h3>
       </div>
       `
   formUserProfile.innerHTML = tmpUserProfile
   return formUserProfile;
}