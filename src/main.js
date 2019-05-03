// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const ElementoPadre = document.getElementById('padre'); 

const  page1 =  (nodoPadre)=>{
const createNodoHijoDiv = document.createElement("div");
const contenido = `<div class = "col-xs-12 col-lg-6"><img src="http://purelytwins.com/wp-content/uploads/2013/03/purely-fit-life-logos-600px3.png"/></div>
<div class = "col-xs-12 col-lg-6"><img src="http://www.fitlifelucy.com/wp-content/uploads/2016/10/fitlifelucy.png"/>
<h1>Bienvenida!</h1>
<input type="text" value="Email"/> </br>
<input type="text" value="password"/> </br>
<input type="button" value="Log in"/>
<h1>Puedes ingresar con ...</h1>
<img src="https://cdn.icon-icons.com/icons2/726/PNG/128/instagram_f_icon-icons.com_62685.png" alt=""/> 
<img src="https://cdn.icon-icons.com/icons2/413/PNG/128/Facebook_41212.png" alt=""/>
<h1>No tienes un cuenta? REGISTRATE!</h1></div>
`;
createNodoHijoDiv.innerHTML = contenido;
nodoPadre.appendChild(createNodoHijoDiv);
}

page1(ElementoPadre);




