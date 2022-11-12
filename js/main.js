

var elText1 = document.querySelector("[data-text-1]");

var elSection1 = document.querySelector("[data-vis-1]");

toggle(elSection1, elText1);

function toggle (div, text ) {
    text.addEventListener("click", function (evt) {
     div.classList.toggle("visually-hidden") ;
           
     
    });
  }