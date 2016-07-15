function Board(){
  // default values on board creation
  this.numberPegs = 3;
  this.numberColors = 1;
  this.numberDisks = 3;
  this.solved = false;

  this.selection = null;
  this.destination = null;
  this.moveCounter = 0;
}

Board.prototype = {

  clearGame: function(){
    // empties the board, resets all board and peg properties (this.solved, this.peg.solvedAt, this.selection, this.destination) and calls generateGame()
  }

  generateGame: function(){
    // gets values of inputs for disks and colors from 'select'
    // sets numberColors, numberDisks, and numberPegs (if numberColors > 3, numberPegs = numberColors; else numberPegs = 3) based on input values
    // dynamically creates pegs
      // for each number from 1 through numberPegs; create peg.position(number)
    // dynamically creates disks and appends at first peg
      // for each magnitude from 1 through numberDisks; create for each color from 1 through numberColors disk.(magnitude, color)
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

  function Peg(position){
    this.position = position;
    this.currentDisksAt = [];
    this.solvedAt = false;
  }

  Peg.prototype = {

    currentTopDisk: function(){
      // returns this.currentDisksAt[0];
    }

    isSolvedAt: function(){
      // if (currentDisksAt.length != 0 && currentDisksAt.length != Board.numberPegs); return false
      // else if (for each index of currentDisksAt, this.color[index] != this.color[index-1]); return false
      // else this.solvedAt = true
    }

  }

  function Disk(magnitude, color){
    this.magnitude = magnitude;
    this.color = color;
  }

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
