
var gameBoardArray = [[0,0,0],
                 [0,0,0],
                 [0,0,0]];

//var winningCombinations = [000102,101111,202122,
var currentPlayer = 'X'


function eventListeners() {

//declare variables representing each game square 
  var sqr11 = document.getElementById('r1c1');
  var sqr12 = document.getElementById('r1c2');
  var sqr13 = document.getElementById('r1c3');
  var sqr21 = document.getElementById('r2c1');
  var sqr22 = document.getElementById('r2c2');
  var sqr23 = document.getElementById('r2c3');
  var sqr31 = document.getElementById('r3c1');
  var sqr32 = document.getElementById('r3c2');
  var sqr33 = document.getElementById('r3c3');

// add event listeners to each variable to trigger changeSqrValue() function
  sqr11.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r1c1'); });
  sqr12.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r1c2'); });
  sqr13.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r1c3'); });
  sqr21.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r2c1'); });
  sqr22.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r2c2'); });
  sqr23.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r2c3'); });
  sqr31.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r3c1'); });
  sqr32.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r3c2'); });
  sqr33.addEventListener('click', function() { changeSqrValue(currentPlayer, 'r3c3'); });
}

function changeSqrValue(currentPlayer, square) {
  document.getElementById(square).innerHTML = currentPlayer;
  changePlayer();
  changeArrayValue(square);
}


function changeArrayValue (square) {
  var indexString = square; 
  var index1 = parseInt(indexString.charAt(1)) -1; 
  var index2 = parseInt(indexString.charAt(3)) -1;
  gameBoardArray[index1][index2] = currentPlayer;
}

function changePlayer(){
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
  document.getElementById('currentPlayer').innerHTML = currentPlayer;
  return currentPlayer;
}

function checkWinner() {


}

window.onload = function(){
  eventListeners();
}