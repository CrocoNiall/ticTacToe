// sets up gameBoard
var gameBoardArray;
function setUpGameBoardArray() {
      gameBoardArray = [['','',''],
                        ['','',''],
                        ['','','']];
}
// decalres all possible winning scenarios

var winningCombinations = [['00','01','02'],
                            ['10','11','12'],
                            ['20','21','22'],
                            ['00','10','20'],
                            ['01','11','21'],
                            ['02','12','22'],
                            ['00','11','22'],
                            ['02','11','20']]
var currentPlayer = 'O';
var squareValue;
var computerPlay = true;
var xWinsCount = 0;
var oWinsCount = 0;
var counter = 0;

function eventListeners() {
//sets up event listeners
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

  var compPlayTrue = document.getElementById('compPlayTrue');
  var compPlayFalse = document.getElementById('compPlayFalse');

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

 compPlayTrue.addEventListener('click', function(){ changeNoOfPlayers('compPlayTrue'); }); 
 compPlayFalse.addEventListener('click', function(){ changeNoOfPlayers('compPlayFalse'); }); 
}

function changeNoOfPlayers(x) {
 computerPlay = document.getElementById(x).value;
  if (x === 'compPlayTrue'){
    computerPlay = true;
  } else {

  }
  resetGameBoard();
}

function resetGameBoard() {
  document.getElementById('r1c1').innerHTML = null;
  document.getElementById('r1c2').innerHTML = null;
  document.getElementById('r1c3').innerHTML = null;
  document.getElementById('r2c1').innerHTML = null;
  document.getElementById('r2c2').innerHTML = null;
  document.getElementById('r2c3').innerHTML = null;
  document.getElementById('r3c1').innerHTML = null;
  document.getElementById('r3c2').innerHTML = null;
  document.getElementById('r3c3').innerHTML = null;
  setUpGameBoardArray();

//below is the old funcion that was used to clear gameBoard array however this method caused me problems so i creaed the setUpGameBoardArray() function - i should have just done that in the first place. 

  // for (var i = 0; i < gameBoardArray.length; i++){
  //       gameBoardArray[i][0] = null;
  //       gameBoardArray[i][1] = null;
  //       gameBoardArray[i][2] = null;
  //       console.log('array sements cleared')
  // }
}


function checkWinner() {
//Itterates over each possible winning combination and checks if the current gameBoardArray matches any scenario. 

//loop through winningCombination array and perform action on each nested array
  for (var i = 0; i < winningCombinations.length -1; i++) {

//perfom action on each element within each nested array
    var testingCombo = winningCombinations[i];
      for (var x = 0; x < testingCombo.length -1; x++) {

//gets value of first index
        var testIndex1 = testingCombo[0];
        var v1 = testIndex1[0]
        var v2 = testIndex1[1]
        var a = gameBoardArray[v1][v2];

//gets value of second index
        var testIndex2 = testingCombo[1];
        var v3 = testIndex2[0]
        var v4 = testIndex2[1]
        var b = gameBoardArray[v3][v4];

//gets value of third index
        var testIndex3 = testingCombo[2];
        var v5 = testIndex3[0]
        var v6 = testIndex3[1]
        var c = gameBoardArray[v5][v6];

//compares all three values against eachother to determin a possible winner. 
          if (a === 'X' && b === 'X' && c === 'X') {
              //console.log('The winner is:        ' + currentPlayer);
              setWinner('X');
              updateScore('O');           
              break;
          } else  if (a === 'O' && b === 'O' && c=== 'O') {
              //console.log('The winner is:        ' + currentPlayer);
              setWinner('O');
              updateScore('O');
              break;
          } else {
            //console.log('no match');
          }
      }  
  }
}

function checkTie() {
  // var count = 0;
  // for (var i = 0; i < gameBoardArray.length -1; i++) {
  //   gameBoardArray[i][0] == '' ? count++ : count+0;
  //   gameBoardArray[i][1] == '' ? count++ : count+0;
  //   gameBoardArray[i][2] == '' ? count++ : count+0;

  //   if (count === 0) {
  //     console.log('tie')
  //     setWinner('tie');
  //     return count;

  //   } else {
  //     console.log('not zero but '+ count);
  //     return count;
  //   }
  // }
  if (counter === 10) {
    setWinner('tie');
    counter = 0;
    return counter;
  } else {
    return counter;
  }

}

function updateScore(winner) {
  if (winner === 'X') {
   xWinsCount++;
   document.getElementById('xTotal').innerHTML = xWinsCount;
   } else if (winner === 'O'){
      oWinsCount++;
      document.getElementById('oTotal').innerHTML = oWinsCount;
    } else {

    }

}

function setWinner(winner) {
//manipulates DOM to display winner window after each game has been won
  document.getElementById("winnerContainer").style.display = "block"; 
  var winnerHTML = document.getElementById('winner').innerHTML = winner;
   
  document.getElementById('winnerContainer').addEventListener('click', function() {
    resetGameBoard();
    document.getElementById("winnerContainer").style.display = "none"; 
  });
}

function changeSqrValue(currentPlayer, square) {
//amends HTML after calling the checkSquareValue() function to validate squares status then call the changeArrayValue() function to ammend coresponding array value. 

  checkSquareValue(square);
  if (squareValue == null || squareValue == '') {
    document.getElementById(square).innerHTML = currentPlayer;
    changeArrayValue(square);
    checkWinner();
    changePlayer();
    computerPlay === true ? computerMove(currentPlayer) : console.log('computer isnt playeing');
  
    
    } else {
    //console.log('square already has a value')
    }
  }


function computerMove() {

var square = "r" + computerMoveGenerator() + "c" + computerMoveGenerator();
//console.log(square);
checkSquareValue(square);
  if (squareValue == '' || squareValue == null) {
    document.getElementById(square).innerHTML = currentPlayer;
    changeArrayValue(square);
    checkWinner();
    changePlayer();

  } else {
    //console.log('already a value, recalculating');
    computerMove();
  }

}

function computerMoveGenerator() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
          return "1";
      } else if (randomNumber < 0.66) {
          return "2";
      } else {
          return "3";
    }
}

function checkSquareValueComputer (square) {
//returns the value within gameBoard array
  var indexString = square; 
  var index1 = parseInt(indexString.charAt(1) -1) ; 
  var index2 = parseInt(indexString.charAt(3) -1) ;
  squareValue = gameBoardArray[index1][index2];
  return squareValue;
}

function checkSquareValue (square) {
//returns the value within gameBoard array
  var indexString = square; 
  var index1 = parseInt(indexString.charAt(1)) -1; 
  var index2 = parseInt(indexString.charAt(3)) -1;
  squareValue = gameBoardArray[index1][index2];
  return squareValue;
}

function changeArrayValue (square) {
//ammends value within array
  var indexString = square; 
  var index1 = parseInt(indexString.charAt(1)) -1; 
  var index2 = parseInt(indexString.charAt(3)) -1;
  gameBoardArray[index1][index2] = currentPlayer;
  counter++;
  checkTie();
}

function changePlayer(){
//changes player from X to O || O to X after each move
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
  document.getElementById('currentPlayer').innerHTML = currentPlayer;
}

window.onload = function(){
//calls event listeners on load
  eventListeners();
  setUpGameBoardArray();
}