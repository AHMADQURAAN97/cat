'use strict'

let catbutton = document.getElementById ('catbutton');


function handleCatButtonClick () {

let data = localStorage.getItem ('cats');
let catsFromLS = JSON.parse(data);
if (catsFromLS !== null){

    for (let i = 0; i < catsFromLS.length; i++) {
        new Cat(catsFromLS[i].name);
        cats[i].render();
  }
 }
}

catbutton.addEventListener ('click',handleCatButtonClick);