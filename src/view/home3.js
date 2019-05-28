export default () => {
    const CreateChildNode = document.createElement('div');
    const profile = `
    <main>
    <div class="caja">
    <img src= ${image}/>
    <p> ${name} </p>
    </div>
    <main>
    `    ;
    CreateChildNode.innerHTML = profile;
    return CreateChildNode
}
