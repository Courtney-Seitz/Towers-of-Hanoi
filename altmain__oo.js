function Board(){
  // default values on board creation
  this.numberPegs = 3;
  this.numberColors = 1;
  this.numberDisks = 3;
  this.solved = false;

  this.pegsAt = [];

  this.selection = null;
  this.destination = null;
  this.moveCounter = 0;
}

Board.prototype = {

  clearGame: function(){
    // empties the board, resets all board and peg properties and calls generateGame()
    $('peg').empty();
    selection = null;
    destination = null;
    moveCounter = 0;
    generateGame();
  }

  generateGame: function(){
    // sets numberColors, numberDisks, and numberPegs (if numberColors > 3, numberPegs = numberColors; else numberPegs = 3) based on input values
    numberColors = $('#colors').val();
    numberDisks = $('#disks').val();
    if (numberColors > 3){
      numberPegs = numberColors;
    } else {
      numberPegs = 3;
    },

    // dynamically creates pegs and appends to board
      // for each number from 1 through numberPegs; create div peg.position(number) and append to #board
    for (var i=1; i<=numberPegs, i++){
      peg = new Peg(i);
      this.pegsAt.push(peg);
      var newDiv = '<div class = \'peg\' id = \'position' + peg.position + '\'>';
      $('#board').append(newDiv);
    }

  console.log()

var newDiv = '<div class="peg" id="position1">'
    // dynamically creates disks and appends at first peg
      // for each magnitude from 1 through numberDisks; create for each color from 1 through numberColors disk.(magnitude, color)

    for (var i=1; i<=numberDisks, i++){

      for (var k=1; k<=numberColors, k++)
    }
  }

  isSolved: function(){
    // checks isSolvedAt for each peg.position
    // if isSolvedAt is true for all pegs, set this.solved to true
  },

  getMove: function(){
    // parses user input -> Peg.position
    // checks this.moveCounter
    // if this.moveCounter == 0, gets currentTopDisk, stores in this.selection and ++
    // if this.moveCounter == 1, stores Peg.position in this.destination and ++
    // if this.move is completed (i.e. moveCounter == 2), calls checkLegalMove() and resets moveCounter
  }

  checkLegalMove: function(){
    // if this.selection.magnitude >= this.selection.destination; displays 'illegal move'
    // else, calls completeMove()
    // reset this.moveCounter, this.selection, this.destination
  }

  completeMove: function(){
    // gets the div at this.selection and appends it to the div at this.destination
    // calls isSolved()
  }

}

function Peg(position){
  this.position = position;
  this.disksAt = [];
}

Peg.prototype = {

  currentTopDisk: function(){
    // returns this.disksAt[0];
  }

  isSolvedAt: function(){
    this.solvedAt = true;
    if (disksAt.length != 0 && disksAt.length != Board.numberPegs); return false
    // else if (for each index of disksAt, this.color[index] != this.color[index-1]); return false
    return this.solvedAt
  }

}

function Disk(magnitude, color){
  this.magnitude = magnitude;
  this.color = color;
}

$(document).ready(function(){

  var board = new Board;
  board.generateGame();

  $('select').change(function(){
    board.clearGame();
  })

  $('body').keyup(function(){
    if (board.solved == false){
      board.getMove();
    }
  })

})
