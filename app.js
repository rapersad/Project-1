// var turn = 1
//
// var player1 = {
//   token: 'red',
//   score: 0,
//   scoreBoard: document.getElementById('p1score')
// }
//
// var player2 = {
//   token: 'blue',
//   score: 0,
//   scoreBoard: document.getElementById('p2score')
// }
//
// if (checkWinner(document.turn)) {
// setMessage(document.turn + " Wins" + "!");
// document.winner = document.turn;
// } else if (document.turn == "red") {
//     document.turn = "blue";
//   } else {
//     document.turn = "red";
//  }
// }

//When box is made change box color to P1=red P2=blue

when lineNoFour is drawn to create a box,
   checkWinner player1 || player2 drew the line,
if (lineNoFour == player1)
   console.log()$(this).attr('class'))
    $(this).addClass('red')
  } else {
    $(this).addClass('blue')
  }

// var player1 = 'red';
// var player2 = 'blue';
// var boxColor = 'clear';
// var lineNoFour = 0
//
// $('.emptyBox').click(function() {
//       $(this).removeClass('emptyBox')
//       if (lineNoFour == '4')
//         console.log($(this).attr('class'))
//         $(this).addClass('blue')
//       } else {
//         $(this).addClass('red')
//       }

      var turn = 'red';
      var boxOneLine = 0

       //Creates box 1
      $('.available').click(function() {
        $(this).removeClass('available')
        if (turn == 'blue') {
          $(this).addClass('blue')
        } else {
          $(this).addClass('red')
        }
       //Switch turns P1=red P2=blue
        turn == 'red' ? turn = 'blue' : turn = 'red'
        console.log($(this).attr('class'))
        if ($(this).hasClass('box1')) {
          boxOneLine++
        }

        if (boxOneLine === 4) {
          $('#box1').addClass('black')
        }
      })

      //Creates box 2
      var boxTwoLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box2')) {
          boxTwoLines++
        }
        if (boxTwoLines === 4) {
          $('#box2').addClass('black')
        }
      })

      //Creates box 3
      var boxThreeLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box3')) {
          boxThreeLines++
        }
        if (boxThreeLines === 4) {
          $('#box3').addClass('black')
        }
      })

      //Creates box 4
      var boxFourLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box4')) {
          boxFourLines++
        }
        if (boxFourLines === 4) {
          $('#box4').addClass('black')
        }
      })

      //Creates box 5
      var boxFiveLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box5')) {
          boxFiveLines++
        }
        if (boxFiveLines === 4) {
          $('#box5').addClass('black')
        }
      })

      //Creates box 6
      var boxSixLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box6')) {
          boxSixLines++
        }
        if (boxSixLines === 4) {
          $('#box6').addClass('black')
        }
      })

      //Creates box 7
      var boxSevenLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box7')) {
          boxSevenLines++
        }
        if (boxSevenLines === 4) {
          $('#box7').addClass('black')
        }
      })

      //Creates box 8
      var boxEightLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box8')) {
          boxEightLines++
        }
        if (boxEightLines === 4) {
          $('#box8').addClass('black')
        }
      })

      //Creates box 9
      var boxNineLines = 0

      $('.available').click(function() {
        $(this).removeClass('available')
        $(this).addClass('black')
        console.log($(this).attr('class'))
        if ($(this).hasClass('box9')) {
          boxNineLines++
        }
        if (boxNineLines === 4) {
          $('#box9').addClass('black')
        }
      }

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

      //Check winner
      // var available = 9
      //
      // function claimBox()
      // {
      //   available == player1Boxes++
      // }
      //
      // function checkWin() {
      //   if (!available) {
      //   if (p1b > p2b)
      // }  console.log
      //        'p1 wins'
      // } { else
      //        'p2 wins'
      // }
      //
      // if (condition) {
      //     block of code to be executed if the condition is true
      // } else {
      //     block of code to be executed if the condition is false
      // }
      //
      // $('line').click(function(){
      //   if($(this).hasClass('box1')linesDrawn.box1++
      //   var linesDrawn={
      //     box:0;
      //     box2:0;
      //  }
      // }

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

      //Changes hover color (incomplete)
      // $(".vertLine").hover(function(){
      //     $(this).css("background-color", "red");
      //     }, function(){
      //     $(this).css("background-color", "blue");
      // });


      //Resets board/scores (incomplete)
      // //To reset the game
      //   for (var i = 1; i <= 9; i++) {
      //     cleargrid(i);
      //   }

      // function clearBoard() {
      //   for(var i = 0; i < boxes.length; i++) {
      //     boxes[i].className = 'box'
      //   }
      //   document.getElementById('announce').innerHTML = ''
      //   addListeners()
      // }
      //
      // document.getElementById('resetBoard').addEventListener('click', clearBoard)
      //
      // document.getElementById('resetScores').addEventListener('click', function(){
      //   player1.score = 0
      //   player1.scoreBoard.innerHTML = player1.score
      //   player2.score = 0
      //   player2.scoreBoard.innerHTML = player2.score
      // })
      //
      // addListeners()

//       resets board version2
//
//       var reset = $('.restartGame');
//
// restart.on('click', function(){
//   for(var i = 0; i < yesPlay.length; i++){
//     yesPlay.eq(i).removeClass('red blue')
//     yesPlay.eq(i).addClass('noPlay')
//   }
//     currentTurn = 'R'
//     $('#displayTurn').removeClass('red blue')
//     $('#displayTurnSmall').removeClass('red blue')
//     $('#displayTurn').addClass('red')
//     $('#displayTurnSmall').addClass('red')
//     $('.redCaught').html(0)
//     $('.blueCaught').html(0)
//     $('h1').html('Faux GO!')
// })
