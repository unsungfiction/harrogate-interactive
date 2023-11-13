
let navHeight = document.getElementById('topNav').getBoundingClientRect().height;

let letterBox = document.getElementById('letterBox'); 

letterBox.style.marginTop = navHeight + "px";
letterBox.style.height = window.innerHeight - navHeight + "px";