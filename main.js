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
    // console.log(board.selectNum);
    // console.log(board.destNum);
    if ((!board.selectNum)  || (board.selectNum > board.destNum)){
      $('h5').css("visibility",  "visible");
    } else {
      $('h5').css("visibility", "hidden");
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
    // to be defined on board creation
    magnitude: null,
    // to be defined on board creation
    color: null,
  },

  generateGame: function() {
    // board.numberDisks = $('#disks').val();
    // board.numberColors = $('#colors').val();
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

        var newDiv = '<div class = \'disk\' id = \'' + newDisk.magnitude + '\'></div>';
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

  $('body').on('keyup', function(event){
    board.getMove(event);
  });

})
