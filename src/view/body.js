export default ()=>{
    const CreateChildNode = document.createElement("div");
    const Content =`
    <body>
    <div class="bodyTmp">
        <form class="formulario" action="">
            <input type="text" id="tareaInput" placeholder="Agrega tu tarea">
            <input type="button" class="boton" id="btn-agregar" value="Agregar Tarea">
        </form>
    <div class="wrap">
        <ul class="lista" id="lista">
            <li><a href="#">1 Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">2 Lorem ipsum dolor sit amet.</a></li>
            <li><a href="#">3 Lorem ipsum dolor sit amet.</a></li>
        </ul>
        </div>
        </div>
  </body>
` ;
CreateChildNode.innerHTML = Content;

return CreateChildNode
}