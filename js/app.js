// Global Variables
sqauresTaken = [];
squaresFree = [];
var playerTurn = 1;
var player = "X";
var playerXValue = 4;
var playerOValue = 1;
var gameOver = false;
var sapcesTaken = {
  c1: false,
  c2: false,
  c3: false,
  c4: false,
  c5: false,
  c6: false,
  c7: false,
  c8: false,
  c9: false
}
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];
var array8 = [];

var ans1 = 0;


// DOM Variables
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var cell6;
var cell7;
var cell8;
var cell9;
var reset;
var score;
var score;
var playerTurnMessage;
var gameTable;
var img;
var winnerMessage;

// Event Listeners
document.addEventListener('DOMContentLoaded', function(e) {
  img = document.getElementsByTagName('img');
  cell1 = document.getElementById("cell1");
  cell2 = document.getElementById("cell2");
  cell3 = document.getElementById("cell3");
  cell4 = document.getElementById("cell4");
  cell5 = document.getElementById("cell5");
  cell6 = document.getElementById("cell6");
  cell7 = document.getElementById("cell7");
  cell8 = document.getElementById("cell8");
  cell9 = document.getElementById("cell9");
  reset = document.getElementById("resetbutton");
  score = document.getElementsByTagName("input")[0];
  score = document.getElementsByTagName("input")[1];
  playerTurnMessage = document.getElementById("turnmessage");
  gameTable = document.getElementById('gamebox');
  winnerMessage = document.getElementById('winnermessage');

  gameTable.addEventListener('click', function(e) {
    if (!gameOver) {
      playerTurn ++;
      whoseTurn();
      if (e.target.id === "cell1" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = null;
        console.log(sapcesTaken[e.target.id]);
        array1.push(playerXValue);
        array4.push(playerXValue);
        array7.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell2" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array1.push(playerXValue);
        array5.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell3" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array1.push(playerXValue);
        array6.push(playerXValue);
        array8.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell4" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerXValue);
        array4.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell5" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerXValue);
        array5.push(playerXValue);
        array7.push(playerXValue);
        array8.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell6" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerXValue);
        array6.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell7" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerXValue);
        array4.push(playerXValue);
        array8.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell8" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerXValue);
        array5.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      } else if (e.target.id === "cell9" && playerTurn % 2 === 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerXValue);
        array6.push(playerXValue);
        array7.push(playerXValue);
        e.target.firstChild.src = "img/xzybit.png"
      }
  
      if (e.target.id === "cell1" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array1.push(playerOValue);
        array4.push(playerOValue);
        array7.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell2" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array1.push(playerOValue);
        array5.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell3" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array1.push(playerOValue);
        array6.push(playerOValue);
        array8.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell4" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerOValue);
        array4.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell5" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerOValue);
        array5.push(playerOValue);
        array7.push(playerOValue);
        array8.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell6" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array2.push(playerOValue);
        array6.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell7" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerOValue);
        array4.push(playerOValue);
        array8.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell8" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerOValue);
        array5.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      } else if (e.target.id === "cell9" && playerTurn % 2 !== 0) {
        sapcesTaken[e.target.id] = true;
        array3.push(playerOValue);
        array6.push(playerOValue);
        array7.push(playerOValue);
        e.target.firstChild.src = "img/omar.png"
      }
      ans1 = (array1.reduce((a,b) => a+b,0));
      ans2 = (array2.reduce((a,b) => a+b,0));
      ans3 = (array3.reduce((a,b) => a+b,0));
      ans4 = (array4.reduce((a,b) => a+b,0));
      ans5 = (array5.reduce((a,b) => a+b,0));
      ans6 = (array6.reduce((a,b) => a+b,0));
      ans7 = (array7.reduce((a,b) => a+b,0));
      ans8 = (array8.reduce((a,b) => a+b,0));
  
      gameWin();
    }

  })

})

function whoseTurn() {
    if(playerTurn % 2 === 0 || playerTurn === 0){
        player = 'X';
        //playerXValue = +4;
        playerTurnMessage.textContent = "Xzibit goes Next";
    } else if(!(playerTurn % 2 === 0)){
        player = 'O';
        //playerOValue ++;
        playerTurnMessage.textContent = "Omar goes Next";
    }
}

function gameWin() {
  if (ans1 === 12) {
    winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans2 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans3 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans4 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans5 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans6 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans7 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  } else if (ans8 === 12) {
     winnerMessage.textContent = 'Xzibit is the winner';
    gameOver = true;
  }

  if (ans1 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans2 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans3 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans4 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans5 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans6 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans7 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  } else if (ans8 === 3) {
    winnerMessage.textContent = 'Omar is the winner';
    gameOver = true;
  }
}