# Classic Arcade Game

This project is a redo of the classic arcade game "Frogger". It is setup as an exercise in using JavaScript and its object-oriented programming capabilities and subclassing methods. Class functions and class prototype functions with the keyword .this are used to achieve efficient code.

## How to Run:

Running [index.html](index.html) will get you straight into the game. There is only one character at this point. You start with 5 lives.

## How to Play:

Use the arrow keys to move the player. Attempt to cross the stone road to reach the water. Once in the water the player will reset in the grassy area.

Every time the player reaches the water you receive 10 points. If you collide with a bug you lose 5 points. The player loses a life if a collision with a bug happens when the player's score is zero. Once you have accumulated some points you can afford to take risks and get hit by a bug. You will not lose a life until the score is back to zero. But be careful, if the player is in a certain area, the bugs will speed up to catch you.

To win you should collect 100 points. On losing 5 lives the game will ask you to reset by refreshing the page (F5). Gems and a chance to win extra points and lives will be added in the next version. Game on!

## Enhancements to be added:

* Gems that give extra points
* Heart that gives an extra life
* Different types and size of bugs
* Improve  collison detect
* Bigger playing area with multiple bugs on each row
* Sound effects
* Water with an enemy shark
* Choice of player character
* Level choices that increase speed



## Original Project Instructions:

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
