'use strict';

let catForm = document.getElementById('catForm');
let catlist = document.getElementById('catlist');

let cats = [];

function Cat (name) {

    this.name = name;

    cats.push(this);
    
settingToLocalStorage();
}


Cat.prototype.render = function () {

let listItem = document.createElement('li');
listItem.textContent=this.name;
catlist.appendChild(listItem);
}



function handleCatSubmit (event) {
    event.preventDefault();

let newCat= new Cat (event.target.kitten.value);
catForm.reset();
newCat.render();
}



function settingToLocalStorage() {
    let data = JSON.stringify(cats);
    
    localStorage.setItem('cats', data);
  }
// function saveTolocalStorage (){
// let data = JSON.stringify(cats);
// localStorage.setItem('catcat',data);

// }