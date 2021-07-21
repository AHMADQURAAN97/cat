'use strict';



let data = localStorage.getItem('cats');
let normalObj = JSON.parse(data);

if (normalObj !== null) {
  for (let i = 0; i < normalObj.length; i++) {
    new Cat(normalObj[i].name);
    cats[i].render();
  }
}


// let stringObj = localStorage.getItem('catcat');
// let normalObj = JSON.parse (stringObj);
// if (normalObj !== null){
//     for ( let i=0 ; i < normalObj.length ; i++){

//         new Cat (normalObj[i].name);
//         cats[i].render ();
//     }
// }


catForm.addEventListener ('submit', handleCatSubmit);