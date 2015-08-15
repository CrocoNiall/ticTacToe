
var gameBoardArray = [[0,0,0],
                 [0,0,0],
                 [0,0,0]];

function eventListeners() {

var sqr11 = document.getElementById('r1c1');
var sqr12 = document.getElementById('r1c2');
var sqr13 = document.getElementById('r1c3');
var sqr21 = document.getElementById('r2c1');
var sqr22 = document.getElementById('r2c2');
var sqr23 = document.getElementById('r2c3');
var sqr31 = document.getElementById('r3c1');
var sqr32 = document.getElementById('r3c2');
var sqr33 = document.getElementById('r3c3');
var player = 'x';


sqr11.addEventListener("click", changeSqrValue(player, 'r1c1'), false);
sqr12.addEventListener('click', changeSqrValue(player, 'r1c2'), false);
}

function changeSqrValue(player, square) {
 document.getElementById(square);

  document.getElementById(square).innerHTML = player;

}

window.onload = function(){
  eventListeners();
}