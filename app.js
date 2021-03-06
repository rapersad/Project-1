// Variables for each box
var turn = 'red';
var boxOneLine = 0
var boxTwoLines = 0
var boxThreeLines = 0
var boxFourLines = 0
var boxFiveLines = 0
var boxSixLines = 0
var boxSevenLines = 0
var boxEightLines = 0
var boxNineLines = 0

//Creates blue/red lines
$('.available').click(function() {
  var won = false
  $(this).removeClass('available')
  if (turn == 'blue') {
    $(this).addClass('blue')
  } else {
    $(this).addClass('red')
  }
  //When box is made, changes box color to P1=red P2=blue
  console.log($(this).attr('class'))
  //Creates each box
  if ($(this).hasClass('box1')) {
    boxOneLine++
    if (boxOneLine === 4) {
      $('#box1').addClass(turn)
      //When player creates a box they get an extra turn
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box2')) {
    boxTwoLines++
    if (boxTwoLines === 4) {
      $('#box2').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box3')) {
    boxThreeLines++
    if (boxThreeLines === 4) {
      $('#box3').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box4')) {
    boxFourLines++
    if (boxFourLines === 4) {
      $('#box4').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box5')) {
    boxFiveLines++
    if (boxFiveLines === 4) {
      $('#box5').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box6')) {
    boxSixLines++
    if (boxSixLines === 4) {
      $('#box6').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box7')) {
    boxSevenLines++
    if (boxSevenLines === 4) {
      $('#box7').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box8')) {
    boxEightLines++
    if (boxEightLines === 4) {
      $('#box8').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }
  if ($(this).hasClass('box9')) {
    boxNineLines++
    if (boxNineLines === 4) {
      $('#box9').addClass(turn)
      boxesWon.push(turn)
      checkWin()
      won = true
    }
  }

  if (!won) {
    //Switch turns from red to blue
    turn == 'red' ? turn = 'blue' : turn = 'red'
    if (turn == 'red') {
      $('.player1').eq(0).text("Red's turn")
      $('.player2').eq(0).text("Blue")
      //Shows which player's turn
    } else {
      $('.player1').eq(0).text("Red")
      $('.player2').eq(0).text("Blue's turn")
    }
  }
})

//Check for winner & alerts with pop up
var boxesWon = []

function checkWin() {
  if (boxesWon.length === 9) {
    var redCount = boxesWon.filter(function(b) {
      return b === 'red'
    }).length
    if (redCount > 4) {
      //Alert red/blue wins!
      alert("Red Wins!");
    } else {
      alert("Blue Wins!");
    }
  }
}

// resets game
$('#restart').on('click', function() {
  boxesWon = []
  if ($('.box').hasClass('red') || $('.horizLine').hasClass('red') || $('.vertLine').hasClass('red') || $('.box').hasClass('blue') || $('.horizLine').hasClass('blue') || $('.vertLine').hasClass('blue')) {
    $('.box').removeClass('red')
    $('.horizLine').removeClass('red')
    $('.vertLine').removeClass('red')
    $('.box').removeClass('blue')
    $('.horizLine').removeClass('blue')
    $('.vertLine').removeClass('blue')
  }
  turn = 'red';
  boxOneLine = 0
  boxTwoLines = 0
  boxThreeLines = 0
  boxFourLines = 0
  boxFiveLines = 0
  boxSixLines = 0
  boxSevenLines = 0
  boxEightLines = 0
  boxNineLines = 0
  $('.player1').eq(0).text("Red goes first!")
  $('.player2').eq(0).text("Blue")
  console.log('here')
})
