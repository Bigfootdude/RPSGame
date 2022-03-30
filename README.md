# RPSGame
This game is little more than a practice rps game with a mode of rock paper scissors lizard spock.

The mode of rpsls was the hardest to set up, if a more elegent solution than a true false variable at the top and
a series of if then statements at every important place in the program comes to my attention in the future I will
then probably be compeled to implement it and update my repos.  Until then, I release this program for your ammusement.

The basic rps strategy was to convert rock to the number zero, paper to one and scissors to two.  Then a simple math comparison
could determine victory or defeat which would cut down on if then statements in the program.  Rpsls mode involves using more
numbers and a more complicated system that either subtracts or adds the player number to one end or the other of the 0-4 number
line.  Then comparison of the numbers becomes simple, or at least easier.  This method seems to require a seperate comparison if 
player is smaller or larger than computer.  If they are equal then it's just a tie.

The mode button is how you change the appearance of the page between the games and reset the score.  It hides the spock and lizard
buttons on normal mode and reveals them on the other mode.

Most of the variables on the top of the page are to initialize the program properly.  Again if a better way reveals itself to me
I will probably be compelled to return to this game and refactor it.

And finally, it is all called by the buttons on the page.  Each one starting a new round in the game and changing the global variables
in the game logic.
