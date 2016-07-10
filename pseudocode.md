object "board", which has properties / methods:
- pegs 1, 2, and 3
    pegs have properties / methods:
    - number (3)
    -- positions 1, 2, and 3
    --- current disks @ position [array]
    - methods:
    -- currentTopDisk
    -- isLegalMove
- disks of "n" number and "k" colors (1 <= k <= 3 )
    disks have properties / methods:
    - number/magnitude/order (n)
    - color (k)
    - data-type (color) (value to compare whether disks are a "match" for isSolved condition)
    - methods:
    -- selectDisk
    -- moveTo
- solved? (true/false)

- methods:
-- generateGame
--- generateDisks (generates a set of disks with incrementally increasing width for each color and sets their initial configuration on the board (i.e. @ position 2))
---- getNumberColors(user input)
---- getNumberDisks(user input)

create n Disks
  for each number Disk, create k of that magnitude, one for each color
  when k Disks have been created, move to next magnitude disk (i.e. increase magnitude by 1)
  as each Disk is created, place it at the bottom of the starting position (i.e end of array)

  for each Disk:
    for each Color:
      give it a value of (current color)
      give it a value of (number/order/magnitude)
        from a starting width, increase width incrementally as value increases
      <!-- should create "k" Disks of each magnitude before moving to the next order -->
    place it on bottom of the starting position (i.e. position 2)
    should end with pyramid of n*k disks in decreasing order of width and with


-- isSolved
-- moveCompleted (counter makes sure user makes two selections, then resets listeners)


event listeners for keys 1, 2, and 3 correspond to pegs 1, 2, and 3 respectively.
- first event calls selectDisk, which calls currentTopDisk; also calls moveCompleted
- second key calls moveTo, which calls isLegalMove
