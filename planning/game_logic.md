Gameplay:
- order disks in array by width
- user selecting a peg will focus on the highest (i.e. least width) disk at that position
- user selecting a destination will run isLegalMove function
-- checks to make sure either a) highest disk is >= width of selected disk, or b) peg is empty

Victory Condition:
- if all disks of same color are at same position (assuming above, i.e. if all disks are on top of a disk of equal or greater width), game is won
