// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';    
    this.setPosition();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed;
    //console.log(this.col);    
    if (this.x > 505)
        this.setPosition();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.setPosition = function() {
    this.col = -1;
    this.row = Math.floor((Math.random() * 4) + 1);
    this.x = this.col*101;
    this.y = 83*this.row;    
    this.speed = Math.floor((Math.random() * 7) + 2);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.setPosition();    
}

Player.prototype.setPosition = function() {    
    this.row = 5;
    this.col = 2;
    this.isMovable = true;         
    //console.log(this.x,this.y);    
}

Player.prototype.update = function(dt) {
        this.x = 101 * this.col;
        this.y = 83 * this.row;
}


Player.prototype.handleInput = function(input){    
    if (input === 'left') {        
        this.col--;
    } else if (input === 'right') {
        this.col++;
    } else if (input === 'up') {
        this.row--;
    } else if (input === 'down') {
        this.row++;
    }
    
    if (this.col < 0)
        this.col = 4;
    if (this.col > 4)
        this.col = 0;
    if (this.row > 5 || this.row < 1)
        this.row = 5;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
allEnemies.push(new Enemy());
var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
