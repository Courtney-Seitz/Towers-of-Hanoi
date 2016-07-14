# Towers-of-Hanoi
WDI11 Project 1

7/13/16 - let's call it v 1.0, I guess?

Thanks for checking out my project! Feel free to look around and let me know what you think - I'll be revisiting this in the near future, and I'm always open to feedback on how I can make this better.

I had done some work with the traditional Towers of Hanoi puzzle back in high school math team, so for this project I decided that I wanted to try out a variation of some kind. After some research, I landed on the "split" problem (screenshot in the planning folder) and decided to give it a go.

As you can probably tell by looking at my source and pseudocode side by side, this was a case where I started with a certain approach in mind, and very quickly ended up having to move in a different direction. Some elements of my original concept stayed in, though:

* I opted to have all of the "disks" dynamically created in JS, which allowed me some flexibility in eventually setting up user inputs.
* I was successful in using a keyboard interface, as opposed to a mouse (e.g. clicking to place or drag-and-drop).
* I did keep all of the variables and functions declared in the "board" class (which at this point I'm honestly not sure was helpful or not)
* I was able to contain what I needed in a single "ready" event listener (game creation), a single "keyup" event listener (disk selection / movement), and a single "change" event listener (disk / color selection)

But other parts of the project I had to change:

* I had planned on creating and manipulating not only the disks, but also the pegs as JS objects, and then having the movement / logic of the game act out completely in JS, with the HTML just reflecting what was going there. Instead, though, I ended up doing a lot more direct manipulation of the DOM than I had anticipated, and the logic I set up had to instead pull and compare values directly from the DOM.
* Similarly, I had planned on being able to store and call the disks from an array, but ended up using a jQuery selector instead... not a gamebreaker, but frustrating to not be able to figure out at first.

Ultimately, though, I reached MVP (game creation, movement, and logic all happening dynamically) early enough that I was able to incorporate some additional features that I'm pleased with:

* Disks are centered in positions; "pegs" are spaced across the screen
* Prevent and display message for illegal moves
* Selection of empty position does not affect move counter
* Highlight and 'toggle' selection
* Removing focus from dropdown after selecting (mitigating accidental keyboard selection in dropdown)
* Victory condition, which displays message and 'turns off' keyboard input

From a design perspective I'm probably most pleased with the decision to use keyboard inputs; once I ironed out the kinks it became one of my favorite things about the project. It forced me to come up with ways to overcome the disadvantages it had against mouse input - not being able to easily see what you selected, which let me to "toggle" the opacity of the disk - and ended up, I think, feeling much faster and smoother than mouse input.
