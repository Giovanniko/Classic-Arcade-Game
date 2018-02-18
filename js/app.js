// Enemies the player must avoid
// Variables applied to each of our instances go here

var Enemy = function(xPos, yPos) {

    this.sprite = 'images/enemy-bug.png';
    this.x = xPos;
    this.y = yPos;
    this.width = 80;
    this.height = 55;    
};

function checkCollisions(obj2, obj1) {

    var rect1 = obj1; 
    var rect2 = obj2; 

    if (rect1.x < rect2.x + rect2.width &&
       rect1.x + rect1.width > rect2.x &&
       rect1.y < rect2.y + rect2.height &&
       rect1.height + rect1.y > rect2.y) {
       return true;
    } 
    return false;
}

// Update the enemy's position
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    
    //accelerator adds an additional random speed increase depending on player location
    var lower = 1;
    var higher = 3;
    var accelerator = Math.round(Math.random() * ( higher - lower )) + lower;
    var levelSpeed; //sets a base speed. TODO: change according to a chosen skill level

    //checks player location, bugs speed up accordingly
    if (player.y >= 130 && player.y < 180 && player.x > 250) {
        levelSpeed = 250* accelerator;
       } else {
           levelSpeed = 250;
       } 
                                                     
    var varSpeed = Math.floor(Math.random()* (levelSpeed)); //creates a variable speed movement
    // Check bug is not off the game area;
    if (this.x < 500) {
        this.x += (varSpeed* dt); //varSpeed randomly changes and causes bugs to reorder somewhat
    }
    else {
        this.x = 0; //reset to start of row
    }
    if (checkCollisions(this, player)) {
        player.points("down");
        player.reset();
    }
};

// Draw the enemy on the screen
//TODO: create random position offsest between bugs
Enemy.prototype.render = function() {
                                                               
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
var Player = function(){
   this.frogger = 'images/char-boy.png';
   this.x = 300;
   this.y = 400;
   this.Xstart = this.x;
   this.Ystart = this.y;
   this.width = 60;
   this.height = 45;
   this.score = 0;
   this.lives = 5;
};

Player.prototype.update = function(){
     
    if (this.y < -15) {
        this.points("up");
        this.reset();
//         setTimeout(this.reset(), 1500); TODO: fix reset delay to 500ms;
    }
};

//Main reset method
Player.prototype.reset = function() {
    
    this.x = this.Xstart;
    this.y = this.Ystart;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.frogger), this.x, this.y);
    
    //Place scores and lives on canvas
    ctx.font = "30px arial";
    ctx.fillStyle = "red";
    ctx.fillText("Score: "+ this.score, 20, 35);
    ctx.fillText("Lives: " + this.lives, 380, 35);
    
    //loss of all lives, but not a zero score, will alert to restart the game
    if (this.score === 0 && this.lives === 0) {
        ctx.font = "30px arial";
        ctx.fillSytle = "red";
        ctx.fillText("GAME OVER! Press F5 to restart", 20, 570);
    }
    //any score above 100 will alert to restart the game
    if (this.score >= 100) {
        ctx.font = "30px arial";
        ctx.fillStyle = "yellow";
        ctx.fillText("YOU WIN! Press F5 to replay", 20, 570);
    }
};

Player.prototype.handleInput = function(move) {
    if (this.lives !== 0 && this.score < 100){  //if lives are 0 or the score is 100 or above, freeze user input
        if (move === "left" && this.x > 0) {
            this.x -= 30;
        }

        if (move === "up" && this.y > -50) {
            this.y -= 30;
        }

        if (move === "right" && this.x < 400) {
            this.x += 30;
        }

        if (move === "down" && this.y < 430) {
            this.y += 30;
        }
    }
};

//depending on the input assign points. TODO: different points for different colored gems.
Player.prototype.points = function(input) {
    if (input == "up") {
        this.score = (this.score + 10);
    }
    else{
        this.score = (this.score - 5);
    } 
   
//on losing points check to see if less than zero and adjust lives
//reset score to zero each time otherwise score will keep decreasing
    if (this.score < 0) {
        this.lives -= 1;
        this.score = 0;
    }
};

//Gem Class
var Gems = function() {
    this.gem = 'images/gem-green-small.png';
    this.x = 200;
    this.y = 200;
};

//TODO: place an array of gems randomly on different stone squares for a certain period of time.
Gems.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.gem), 300, 200);
};

// Instantiate  objects:
// All enemy objects in an array called allEnemies
// player object in a variable called player
// TODO: add an array of gems or bonus items

var bug1 = new Enemy(0, 50);
var bug2 = new Enemy(-100, 140);
var bug3 = new Enemy(-230, 225);

var allEnemies = [bug1, bug2, bug3];
var player = new Player();
//var gem = new Gems();

//Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

