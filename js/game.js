var Rink = require("./rink");
var Puck = require("./puck");
var Point = require("./point");
module.exports = class Game {
    constructor(){
    	this.players = [];
    	this.rink = new Rink();
    	this.r = 500;
    	this.puck = new Puck(new Point(4700/2, 2000/2), this.r);
    }
    update(){
    	//move players+puck
    	// console.log("players moved")
    	//collide
    	// console.log("collision")
    }

    // draw(canvas) {
    // 	this.rink.draw(canvas);
    // 	for(var i=0; i<this.players.length; i++){
    // 		this.players[i].draw(canvas);
    // 	}
    // 	this.puck.draw(canvas);
    // }
    collision() {
        puckCollision();
        for (var i = 0; i < players.length; i++) {
            for (var j = i + 1; j < players.length; j++) {
                console.log("player " + players[i].id + " collides with player " + players[j].id + " ? " + players[i].collision.collidesBox(players[j].collision));
            }
        }
    }

    puckCollision() {
        var y = puck.center.y;
        var x = puck.center.x;
        var r = puck.r;
        // first, check collision with bottom wall
        if (y - r <= 0 && x - r >= Rink.r && x + r <= Rink.width - Rink.r) console.log("bottom wall collision");
        // next, check collision with left wall
        if (x - r <= 0 && y - r >= Rink.r && y + r <= Rink.height - Rink.r) console.log("left wall collision");
        // next, check collision with top wall
        if (y + r >= Rink.height && x - r >= Rink.r && x + r <= Rink.width - Rink.r) console.log("top wall collision");
        // next, check collision with right wall
        if (x + r >= Rink.width && y - r >= Rink.r && y + r <= Rink.height - Rink.r) console.log("right wall collision");
        for (var i = 0; i < Rink.circles.length; i++) {
            var circle = Rink.circles[i];
            if (circle.distanceToPoint(puck.center) <= r) {
                console.log("collided with circle?");
                switch (quadrant) {
                    case 1: // top right circle
                        if (x <= Rink.width && x >= Rink.width - Rink.r && y >= Rink.r * 3 && y <= Rink.height) console.log("yeah, quad 1 collision");
                    case 2: // top left circle
                        if (x <= Rink.r && x >= 0 && y >= Rink.r && y <= Rink.r * 2) console.log("yeah quad 2 collision");
                    case 3: // bottom left circle
                        if (x <= Rink.r && x >= 0 && y >= 0 && y <= Rink.r) console.log("yeah quad 3 collision");
                    case 4: // bottom right circle
                        if (x <= Rink.width && x >= Rink.width - Rink.r && y >= 0 && y <= Rink.r) console.log("yeah quad 4 collision");
                }
            }
        }
        for (var i = 0; i < Rink.goals.length; i++) {
            var goal = Rink.goals[i];
            console.log("puck collides with scoreBox " + goal.side + " ? " + goal.scoreBox.collides(puck.circle));
            console.log("puck collides with bottomBox " + goal.side + " ? " + goal.bottomBox.collides(puck.circle));
            console.log("puck collides with leftBox " + goal.side + " ? " + goal.leftBox.collides(puck.circle));
            console.log("puck collides with rightBox " + goal.side + " ? " + goal.rightBox.collides(puck.circle));
        }
        for (var i = 0; i < players.length; i++) {
            shot(players[i]);
            console.log("puck collides with stick of " + players[i].id + " ? " + players[i].stick.collidesAngled(puck.circle, players[i].angle));
        }

    }
    shot(player) {}
}