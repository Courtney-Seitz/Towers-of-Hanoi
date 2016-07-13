var board = {

  // default values
  numberDisks: 3,
  numberColors: 1,

  moveCounter: 0,

  selection : null,
  destination : null,

  selectNum: null,
  destNum: null,

  diskPositionY: null,

  solved: false,

  solvedRed : ['red', 'red', 'red'],
  solvedBlue : ['blue', 'blue', 'blue'],
  solvedGreen : ['green', 'green', 'green'],

  getMove: function(evt){
    if (board.moveCounter == 0) {
      if (event.which == 49){
        board.selection = $('#first div:first');
        board.selectNum = board.selection.attr('id');
      } if (event.which == 50){
        board.selection = $('#second div:first');
        board.selectNum = board.selection.attr('id');
      } if (event.which == 51){
        board.selection = $('#third div:first');
        board.selectNum = board.selection.attr('id');
      } if (event.which < 49 || event.which > 51){
        board.selection = null;
        board.selectNum = null;
      }
      board.selection.css("opacity", "0.4")
    }

    else {
      if (event.which == 49){
        board.destination = $('#first');
        board.destNum = $('#first div:first').attr('id');
      } if (event.which == 50){
        board.destination = $('#second');
        board.destNum = $('#second div:first').attr('id');
      } if (event.which == 51){
        board.destination = $('#third');
        board.destNum = $('#third div:first').attr('id');
      }
    }

    if(board.selectNum > 0){
      board.moveCounter++;
    }

    if (board.moveCounter == 2){
      board.checkLegalMove();
      board.moveCounter = 0;
      board.selection.css("opacity", "1.0");
    }
  },

  checkLegalMove: function(){
    if ((!board.selectNum)  || (board.selectNum > board.destNum)){
      $('h5').css("visibility",  "visible");
    } else {
      $('h5').html("Illegal move: please try again").css({
        "visibility" : "hidden",
        "color" : "red",
      });
      board.completeMove();
    }
  },

  completeMove: function(){

    board.selection.prependTo(board.destination);
    var count = board.destination.children().length;
    var moveToY = board.diskPositionY + ((count - 1) * 30);
    board.selection.css({"position" : "fixed", "bottom" : moveToY});
  },

  disk: {
    magnitude: null,
    color: null,
  },

  generateGame: function() {
    var diskWidth = 60;
    var diskLeft = board.numberColors * 20;
    var startPositionY = board.numberDisks * board.numberColors * 30 + 10;
    board.diskPositionY = startPositionY
    for (i=1; i<=board.numberDisks; i++){
      diskWidth += 20;
      diskLeft -= 10;
      for (a=0; a<board.numberColors; a++){
        board.diskPositionY -= 30;
        var currentColor;
        if (a == 0){
          currentColor = 'red';
        } if (a == 1){
          currentColor = 'blue';
        } if (a == 2){
          currentColor = 'green';
        }

        var newDisk = board.disk;
        newDisk.magnitude = i;
        newDisk.color = currentColor;

        var newDiv = '<div class = \'disk\' id = \'' + newDisk.magnitude + '\' data-type = \'' + newDisk.color + '\'></div>';
        $('#first').append(newDiv);
        $('#first div:last').css({
          "background-color" : newDisk.color,
          "width" : diskWidth,
          "position" : "fixed",
          "bottom" : board.diskPositionY,
          "margin-left" : diskLeft,

        });
      }
    }
  },

  clearGame: function(){
    $('.peg div').remove();
    board.diskPositionY = 300;
    board.solved = false;
    $('h5').html('').css("visibility", "hidden");
  },

  isSolved: function(){
    if (board.numberColors == 1){
      if ($('#second').children().length == board.numberDisks || $('#third').children().length == board.numberDisks){
        board.solved = true;
      }
    }
    if (board.numberColors > 1){
      if(board.checkPegSolved() == true){
        board.solved = true;
      }
    }
    if (board.solved == true){
      $('h5').html("You solved the puzzle!").css({
        "color" : "green",
        "visibility": "visible",
      });
    }
  },

  checkPegSolved: function(){

    var firstPegCheck = true;
    var secondPegCheck = true;
    var thirdPegCheck = true;

    var firstPeg = [];
    $('#first div').each(function(){
      firstPeg.push(this.getAttribute('data-type'));
    });

    if (firstPeg.length != board.numberDisks && firstPeg.length != 0){
      firstPegCheck = false;
      console.log('peg length false');
    }
    else {
      for (i=1; i<firstPeg.length; i++){
        if (firstPeg[i] != firstPeg[i-1]){
          firstPegCheck = false;
          console.log('same color false');
        }
      }
    }

    var secondPeg = [];
    $('#second div').each(function(){
      secondPeg.push(this.getAttribute('data-type'));
    });

    if (secondPeg.length != board.numberDisks && secondPeg.length != 0){
      secondPegCheck = false;
    }
    else {
      for (i=1; i<secondPeg.length; i++){
        if (secondPeg[i] != secondPeg[i-1]){
          secondPegCheck = false;
        }
      }
    }

    var thirdPeg = [];
    $('#third div').each(function(){
      thirdPeg.push(this.getAttribute('data-type'));
    });

    if(thirdPeg.length != board.numberDisks && thirdPeg.length != 0){
      thirdPegCheck = false;
    }
    else {
      for (i=1; i<thirdPeg.length; i++){
        if (thirdPeg[i] != thirdPeg[i-1]){
          thirdPegCheck = false;
        }
      }
    }
    if (firstPegCheck && secondPegCheck && thirdPegCheck){
      return true;
    }
  }
}

$(document).on("ready", function(){

  board.generateGame();

  $('select').on('change', function(){
    board.clearGame();
    board.numberDisks = parseInt($('#disks').val());
    board.numberColors = parseInt($('#colors').val());
    $('select').blur();
    board.generateGame();
  })

  $('body').on('keydown', function(event){
    if (board.solved == false){
      board.getMove(event);
      board.isSolved();
    }
  });
})
