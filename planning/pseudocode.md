object "board", which has properties / methods:
- solved? (true/false)
- pegs (nested: details below)
- disks (nested: details below)
- methods:
-- isSolved

  --- for k (number of colors) == 1:

    ---- if n (i.e. all) disks at either position other than starting one (i.e. 2 or 3, but not 1) (should also be in legal order, thanks to isLegalMove) then game is solved

  --- for k >= 2:

    ---- if either n or 0 disks at each position; and if all disks @ current position have the same color (should also be in legal order, thanks to isLegalMove), then game is solved

-- moveCompleted (counter makes sure user makes two selections, then resets listeners)

    --- each selection event increases a counter; when the counter == 2, reset to 0 (i.e. move is completed)

-- generateGame:
--- generateDisks (generates a set of disks for each color with incrementally increasing width and sets their initial configuration on the board (i.e. all @ position 1))

    ---- from user input (getNumberColors and getNumberDisks), creates n disks each of k colors, placing each at the bottom of the starting position as they are created

    // abstract
    ----- create n Disks
      ------ for each number Disk, create k of that value, one for each color
      ------ when k Disks have been created, move to next value disk (i.e. increase value by 1)
      ------ as each Disk is created, place it at the bottom of the starting position (i.e end of array)

    // more specific
      ----- for each Disk:
        ------ for each Color:
          ------- give it a value of "current color"
            -------- cycle through k Colors (i%k)
              --------- when k Colors have been cycled through (i.e. when i%k == 0), move to next (i.e. increase) value
          ------- give it a value of (current counter value)
            -------- increase width incrementally as value increases
          <!-- should create "k" Disks of each value before moving to the next order -->
      ----- place it on bottom (i.e. end of array) of the starting position (i.e. position 1)
        <!-- should end with pyramid of n*k disks in decreasing order of width and with -->


- pegs of (hardwired) number: 3
- pegs have properties / methods:
    -- positions: (1, 2, and 3)
    --- currentdisks @ position [array]
    -- methods:
    --- currentTopDisk(position)

    ---- returns disk object at index0 of peg.(position).currentdisks

    --- isLegalMove

    ---- compares value of currentTopDisk of first selection (i.e. disk to be moved) to value of currentTopDisk of second selection (i.e. destination)
      ----- if first <= second, returns true and move is allowed to proceed
      ----- if first > second, returns false, move does not proceed and user is notified of illegal move

- disks of (user input) "n" number and "k" (user input) colors (1 <= k <= 3 )
- disks have properties / methods:

    -- value (n) (for isLegalMove comparison; effects css width)
    -- color (k) (for isSolved comparison; effects css color)

    -- methods:

    --- moveTo

      ---- if isLegalMove allows move to proceed and moveCompleted is true:
        ----- removes disk object from beginning of currentdisks array at current position
        ----- inserts disk object into beginning of currentdisks array at destination position

*****

- event listeners for all pegs: keys 1, 2, and 3 correspond to pegs 1, 2, and 3 respectively.
-- first event calls selectDisk, which calls currentTopDisk; also calls moveCompleted
-- second key calls moveTo, which calls isLegalMove
