var board = {
  //
  solved: false,
  // numberPegs hardwired at 3 (Gold objective: user defined)
  numberPegs: 3,
  // numberDisks user defined
  numberDisks: null,
  // numberColors user defined
  numberColors: null,
  // increments with first and second selection, then resets
  moveCounter: 0,

  disk: {
    // to be defined on board creation
    value: null,
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
    currentTopDisk: function(position){
      return position.currentDisks[0];
    },

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
    for (i=1; i<=board.numberDisks; i++){
      for (a=0; a<board.numberColors; a++){
        var currentColor;
        if (a == 0){
          currentColor = 'red';
        } if (a == 1){
          currentColor = 'blue';
        } if (a == 2){
          currentColor = 'green';
        }
        var newDisk = board.disk;
        newDisk.value = i;
        newDisk.color = currentColor
        console.log(newDisk);
        board.peg.currentDisks.push(newDisk);
      }
    }
    console.log(board.peg);
  },

  moveCompleted: function() {

  },
};

$(document).on("ready", function(){
  board.numberDisks = prompt("how many disks?");
  board.numberColors = prompt("how many colors?");
  board.generateGame();
})
