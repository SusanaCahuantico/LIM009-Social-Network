export default (user) => {
    const profileUser = document.createElement('div');
    const contentUser = `
    <div>
       <h2> ${user.name} </h2>
    </div>
    `
    profileUser.innerHTML = contentUser
    return profileUser;
}