//(INCOMPLETE)
// function startGame() {
// //To reset the game
//   for (var i = 1; i <= 9; i++) {
//     cleargrid(i);
//   }

First player to begin is set to random

var turn = 1

var player1 = {
  token: 'red',
  score: 0,
  scoreBoard: document.getElementById('p1score')
}

var player2 = {
  token: 'blue',
  score: 0,
  scoreBoard: document.getElementById('p2score')
}

  document.turn = "Player 1";
  if (Math.random() < .5) {
    document.turn = "Player 2";
}
  document.winner = null;
  setMessage(document.turn + " Starts");


function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}


//(INCOMPLETE)
var Player 1 = 'red';
var Player 2 = 'blue';

function SwitchTurn()

function takeTurns() {
  return (turn % 2 ? 'Player 1' : 'Player 2')

if (checkWinner(document.turn)) {
setMessage(document.turn + " Wins" + "!");
document.winner = document.turn;
} else if (document.turn == "red") {
    document.turn = "blue";
  } else {
    document.turn = "red";
 }
}

//Creates box 1
var boxOneLine = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box1')){
    boxOneLine++
  }
  if (boxOneLine===4){
    $('#box1').addClass('black')
  }
})

//Creates box 2
var boxTwoLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box2')){
    boxTwoLines++
  }
  if (boxTwoLines===4){
    $('#box2').addClass('black')
  }
})

//Creates box 3
var boxThreeLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box3')){
    boxThreeLines++
  }
  if (boxThreeLines===4){
    $('#box3').addClass('black')
  }
})

//Creates box 4
var boxFourLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box4')){
    boxFourLines++
  }
  if (boxFourLines===4){
    $('#box4').addClass('black')
  }
})

//Creates box 5
var boxFiveLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box5')){
    boxFiveLines++
  }
  if (boxFiveLines===4){
    $('#box5').addClass('black')
  }
})

//Creates box 6
var boxSixLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box6')){
    boxSixLines++
  }
  if (boxSixLines===4){
    $('#box6').addClass('black')
  }
})

//Creates box 7
var boxSevenLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box7')){
    boxSevenLines++
  }
  if (boxSevenLines===4){
    $('#box7').addClass('black')
  }
})

//Creates box 8
var boxEightLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box8')){
    boxEightLines++
  }
  if (boxEightLines===4){
    $('#box8').addClass('black')
  }
})

//Creates box 9
var boxNineLines = 0

$('.available').click(function(){
  $(this).removeClass('available')
  $(this).addClass('black')
  console.log($(this).attr('class'))
  if ($(this).hasClass('box9')){
    boxNineLines++
  }
  if (boxNineLines===4){
    $('#box9').addClass('black')
  }
})

///show player score (INCOMPLETE)
// var boxes = document.getElementsByClassName('box')
//


//Once game is over, stops player from moving again (INCOMPLETE)
// function nextTurn(space) {
//   if (document.winner != null) {
//      setMessage(None);
// } else if (space.innerText == "") {
//         space.innerText = document.turn;
//       switchTurn();
//  }
// }

//Kate's idea
// var available = 9
//
// function claimBox() {
//   available == player1Boxes++
// }
// function checkWin() {
//   if(!available) {
//     if(p1b>p2b)
//     p1 wins
//   }
// }
// $('line').click(function(){
//   if($(this).hasClass('box1')linesDrawn.box1++
//   var linesDrawn={
//     box:0;
//     box2:0;
//} end of Kate's idea

// Checks for possible outcomes (INCOMPLETE)
// function checkWinner(turn) {
// var result = false;
// if (checkBox(1, 2, 3, 4, 5, 6, 7, 8, 9, turn)) {
//
//     result = true;
//   }
//     return result;
// }

//checks if each box is complete (INCOMPLETE)
// function checkRow(a, b, c, d, e, f, g, h, i, turn) {
//   var result = false;
//   if (getBox(a) == turn && getBox(b) == turn && getBox(c) == turn)
//      (getBox(d) == turn && getBox(e) == turn && getBox(f) == turn)
//      (getBox(h) == turn && getBox(i) == turn) {
//     result = true;
//   }
//   return result;
// }

// $('.horizLine').on('click', function() {
//   console.log('clicked')
//   $(this).addClass('blue')
// })
//
// $('.vertLine').on('click', function() {
//   console.log('clicked')
//   $(this).addClass('red')
// })

// stretch goal colored lines in boxes
// only horizontal lines are red (incomplete)
// $('.horizLine').on('click', function(){
//   $(this).addClass('red')
// })
//
// //only vertical lines are blue (incomplete)
// $('.vertLine').on('click', function(){
//   $(this).addClass('blue')
// })

//Changes hover color (incomplete)
// $(".vertLine").hover(function(){
//     $(this).css("background-color", "red");
//     }, function(){
//     $(this).css("background-color", "blue");
// });
