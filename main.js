var board = {
  //
  solved: false,



  // numberDisks user defined
  numberDisks: null,
  // numberColors user defined
  numberColors: null,
  // increments with first and second selection, then resets
  moveCounter: 0,

  selection : null,
  destination : null,

  selectNum: null,
  destNum: null,



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

    board.moveCounter++;

    if (board.moveCounter == 2){
      board.checkLegalMove();
      board.moveCounter = 0;
    }
  },

  checkLegalMove: function(){
    // console.log(board.selectNum);
    // console.log(board.destNum);
    if ((!board.selectNum)  || (board.selectNum > board.destNum)){
      // console.log('illegal move')
    } else {
      // console.log('legal move')
      board.completeMove();
    }
  },

  completeMove: function(){

    board.selection.css("position : absolute, bottom : 140px");
    board.selection.prependTo(board.destination);
    // console.log ('move completed')
  },

  disk: {
    // to be defined on board creation
    magnitude: null,
    // to be defined on board creation
    color: null,

    moveTo: function(position1, position2){
      if (moveCompleted && isLegalMove){
        position2.unshift(currentTopDisk(position1));
      }
    },
  },

  peg: {
    // position to be defined on board creation
    position: 1,
    // will be filled with starting configuration at position 1; will be modified during gameplay for each peg
    currentDisks: [],

    // returns top disk at a given position
    // currentTopDisk: function(){
    //   return $('div:first');
    // },

    // compares magnitude of currentTopDisk of first selection (i.e. disk to be moved) to magnitude of currentTopDisk of second selection (i.e. destination)
    isLegalMove: function(position1, postion2){
      if (currentTopDisk(position1) <= currentTopDisk(position2)){
        return true;
      } else {
        // alert to be replaced with something more ui friendly
        alert("illegal move - please try again")
        return false;
      }
    },
  },

  generateGame: function() {
    var diskWidth = 25;
    for (i=1; i<=board.numberDisks; i++){
      diskWidth += 10;
      for (a=0; a<board.numberColors; a++){
        var currentColor;
        if (a == 0){
          currentColor = 'red';
        } if (a == 1){
          currentColor = 'blue';
        } if (a == 2){
          currentColor = 'green';
        }
        // if (a == 3){
        //   currentColor = 'brown';
        // } if (a == 4){
        //   currentColor = 'orange';
        // }

        var newDisk = board.disk;
        newDisk.magnitude = i;
        newDisk.color = currentColor;

        var newDiv = '<div class = \'disk\' id = \'' + newDisk.magnitude + '\'></div>';
        $('#first').append(newDiv);
        $('#first div:last').css({"background-color" : newDisk.color, "width" : diskWidth});
      }
    }
  },
};

$(document).on("ready", function(){
  board.numberDisks = prompt("how many disks?");
  board.numberColors = prompt("how many colors?");
  board.generateGame();

  $('body').on('keyup', function(event){
    board.getMove(event);
  });

})
