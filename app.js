function startGame() {
//To reset the game
  for (var i = 1; i <= 24; i++) {
    cleargrid(i);
  }

//First player to begin is set to random
  document.turn = "Player 1";
  if (Math.random() < .5) {
    document.turn = "Player 2";
  }
  document.winner = null;
  setMessage(document.turn + " Starts");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

//Once game is over stops player from moving again
function nextTurn(space) {
  if (document.winner != null) {
     setMessage(None);
} else if (space.innerText == "") {
        space.innerText = document.turn;
      switchTurn();
 }
}

function switchTurn() {
//Message red or blue Wins!
if (checkWinner(document.turn)) {
setMessage(document.turn + " Wins" + "!");
document.winner = document.turn;
} else if (document.turn == "red") {
    document.turn = "blue";
  } else {
    document.turn = "red";
 }
}

//only horizontal lines are red (incomplete)
$('.horizLine').on('click', function(){
  $(this).addClass('red')
})

//only vertical lines are blue (incomplete)
$('.vertLine').on('click', function(){
  $(this).addClass('blue')
})

//Changes hover color (incomplete)
// $(".vertLine").hover(function(){
//     $(this).css("background-color", "red");
//     }, function(){
//     $(this).css("background-color", "blue");
// });
