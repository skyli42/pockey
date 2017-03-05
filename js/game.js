var Rink = require("./rink");
var Puck = require("./puck");
var Point = require("./point");
var Vector = require("./vector");
var Player = require('./player');
module.exports = class Game {
    constructor(){
    	this.players = new Map();
    	this.rink = new Rink();
    	this.r = 500;
    	this.puck = new Puck(new Point(4700/2, 2000/2), this.r/20);
    	this.score = 0;
    }
    
    update(){
        function updatePlayer(value, key, map){
            var player = value;
            player.move();
            console.log(player.pos)
        }
        this.players.forEach(updatePlayer);
    	
    }
    movePlayer(id, data){
        var player = this.players.get(id);
<<<<<<< HEAD
=======
        
>>>>>>> 8a78d87fc1353c6bbb47dfd988264bc5a6bb7177
        //update for player
        var dx = data.dx;
        var dy = data.dy;
        var alpha = data.alpha;
        var a = data.a;
        player.stickVelocity = a;
        player.angle = alpha/180 * Math.PI;
        player.velocity.x = dx/100.0;
        player.velocity.y = dy/100.0;
    }
    addPlayer(id){
        console.log(this.r*2)
        var player = new Player(new Point(2*this.r, 2*this.r), 0, this.r/10);
        this.players.set(id, player);
    }
    removePlayer(id){
        this.players.delete(id);
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
         		 if(players[i].collision.collidesBox(players[j].collision)){
         		 	players[i].velocity.x = 0;
         		 	players[i].velocity.y = 0;
         		 	players[j].velocity.x = 0;
         		 	players[j].velocity.y = 0;
         		 }
            }
        }
    }

    puckCollision() {
        var y = puck.center.y;
        var x = puck.center.x;
        var r = puck.r;
        // first, check collision with bottom wall
        if (y - r <= 0 && x - r >= Rink.r && x + r <= Rink.width - Rink.r){
         	console.log("bottom wall collision");
         	puckDeflect();
     	}
        // next, check collision with left wall
        if (x - r <= 0 && y - r >= Rink.r && y + r <= Rink.height - Rink.r){
        	console.log("left wall collision");
        	puckDeflect();
        } 
        // next, check collision with top wall
        if (y + r >= Rink.height && x - r >= Rink.r && x + r <= Rink.width - Rink.r) {
        	console.log("top wall collision");
        	puckDeflect();
        }
        // next, check collision with right wall
        if (x + r >= Rink.width && y - r >= Rink.r && y + r <= Rink.height - Rink.r){

        	console.log("right wall collision");
        	puckDeflect();
        }
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
            console.log("puck collides with stick of " + players[i].id + " ? " + players[i].stick.collidesAngled(puck.circle, players[i].angle));
            if(players[i].stick.collidesAngled(puck.circle, players[i].angle)){
            	shot(players[i]);
            }
        }

    }
    puckDeflect(){
    	var xc = puck.center.x;
    	var yc = puck.center.y;
    	var r = puck.r;
    	var xr = puck.center.x + puck.velocity.x;
    	var yr = puck.center.y + puck.velocity.y;

    	var x = xc + ((r*(xr-xc))/(Math.sqrt(Math.pow(xr-xc,2)+Math.pow(yr-yc,2))));
    	var y = yc + ((r*(yr-yc))/(Math.sqrt(Math.pow(xr-xc,2)+Math.pow(yr-yc,2))));

    	if(yc - y == 0){
    		puck.velocity.x *= -1;
    		return;
    	} 
    	else if(xc-x == 0) {
    		puck.velocity.y *= -1;
    		return;
    	}
    	var m = (yc-y)/(xc-x);

    	var t_hat = new Vector(1/Math.sqrt(1+m*m), m/math.sqrt(1+m*m));
    	var parallelScalar = puck.velocity.dotProd(t_hat);

    	var v_hat = new Vector(1/Math.sqrt(1+1/(m*m)), (-1/m)/(Math.sqrt(1+1/(m*m))));
    	var perpScalar = puck.velocity.dotProd(v_hat);

    	t_hat.multiply(parallelScalar);
    	v_hat.multiply(perpScalar);

    	t_hat.subtract(v_hat);

    	puck.velocity.x = t_hat.x;
    	puck.velocity.y = t_hat.y;


    }

    shot(player) {
    	var stickVector = new Vector(player.stickVelocity*Math.cos(player.angle), player.stickVelocity*Math.sin(player.angle));
        puck.velocity.add(stickVector);

    }
}