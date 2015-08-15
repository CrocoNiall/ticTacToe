
var gameBoardArray = [['','',''],
                 ['','',''],
                 ['','','']]

var winningCombinations = [['00','01','02'],
                            ['10','11','11'],
                            ['20','21','22'],
                            ['00','10','20'],
                            ['01','11','21'],
                            ['02','12','22'],
                            ['00','11','22'],
                            ['02','22','20']]
var currentPlayer = 'O'
var winner;


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

 // var winningCombinations = [[00,01,02],
 //                            [10,11,11],
 //                            [20,21,22],
 //                            [00,10-20],
 //                            [01,11,21],
 //                            [02,12,22],
 //                            [00,11,22],
 //                            [02,22,20]]

function checkWinner() {
  for (var i = 0; i < winningCombinations.length; i++) {
    var testingCombo = winningCombinations[i];
      for (var x = 0; x < testingCombo.length; x++) {
       // testingIndexCombo = testingCombo.split('')
      
        var testIndex1 = testingCombo[0];
        var v1 = testIndex1[0]
        var v2 = testIndex1[1]
        var a = gameBoardArray[v1][v2];


        var testIndex2 = testingCombo[1];
        var v3 = testIndex2[0]
        var v4 = testIndex2[1]
        var b = gameBoardArray[v3][v4];

        var testIndex3 = testingCombo[2];
        var v5 = testIndex3[0]
        var v6 = testIndex3[1]
        var c = gameBoardArray[v5][v6];

          if (a === 'X' && b ===  'X' && c=== 'X') {
              winner = currentPlayer;
              console.log(currentPlayer + ' wins***************');
              break;
          } else  if (a === 'O' && b === 'O' && c=== 'O') {
              winner = currentPlayer;
              console.log(currentPlayer + ' wins***************');
              break;
          } else {
            console.log('no match');
          }
      }  
  }


}

function changeSqrValue(currentPlayer, square) {
  document.getElementById(square).innerHTML = currentPlayer;
  changeArrayValue(square);
  checkWinner();
  changePlayer();
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



window.onload = function(){
  eventListeners();
}