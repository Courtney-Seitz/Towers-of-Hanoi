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
    // empties the board and calls generateGame()
  }

  generateGame: function(){
    // gets values of inputs for disks and colors
      // if more than 3 colors, numberPegs == numberColors
    // sets numberPegs, numberColors and numberDisks
  }.

  isSolved: function(){
    // checks isSolvedAt for each Peg.position
  },

  getMove: function(){
    // parses user input -> Peg.position
    // checks this.moveCounter
      // if this.moveCounter == 0, gets currentTopDisk, stores in this.selection and ++
      // if this.moveCounter == 1, stores Peg.position in this.destination and ++
      // if this.move is completed (i.e. moveCounter == 2), calls checkLegalMove() and resets moveCounter
  }

  checkLegalMove: function(){
    // if this.selection.magnitude >= this.selection.destination
      // displays 'illegal move'
    // else
      // calls completeMove()
    // reset this.moveCounter, this.selection, this.destination
  }

  completeMove: function(){
    // gets the div at this.selection and appends it to the div at this.destination
  }

}

function Peg(){
    this.position;
    this.currentDisksAt = [];
    this.solvedAt = false;
}

Peg.prototype = {

  currentTopDisk: function(){
    // returns this.currentDisksAt[0];
  }

  isSolvedAt: function(){
    // if (currentDisksAt.length != 0 && currentDisksAt.length != Board.numberPegs)
      // return false
    // else if (for each index of currentDisksAt, this.color[index] != this.color[index-1])
      // return false
    // else this.solvedAt = true
  }

}

function Disk(){
  this.magnitude;
  this.color;
}
