// import{ out,changeRoute } from '../view-controller/promises.js';
/* import { createPost } from './body.js';
  
export const paintUser = (user, posts) => {
   console.log(user)
    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
    const userActive = user;
    let string = `
      <header class="header-profile back-color center flex text-color">
          <div class="dropdown margin-right-auto border-none text-color back-color">
              <img class="menu-button back-color" src="img/menu.png" alt="">
              <div class="dropdown-content position">
              <a class="dropdown-links font-size text-color block" href="#/home" id="exit">Cerrar Sesión</a>
              </div>
          </div>
          <div class="position">
              <p class="header-items back-color text-color inline-block">- Wenergy -</p>
          </div>
      </header>
      <section class="margin big-profile center container">
                <p id="userName">${userActive.displayName || userActive.name}</p>
                <p>${userActive.email}<p>
            </div>
        </div>
        <div id='box-of-posts' class="delete-img margin-top"></div>
      </section>`;
  
      divContainer.innerHTML = string;

      const boxPost = divContainer.querySelector('#box-of-posts');
      boxPost.appendChild(createPost(posts));
      
      const buttonLogOut = divContainer.querySelector('#exit');
      buttonLogOut.addEventListener('click', () => {
        out().then(()=> changeRoute("#/home"));
      });
      return divContainer;
  }
  */