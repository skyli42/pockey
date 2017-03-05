var Rink = require("./rink");
var Puck = require("./puck");
var puck = new Puck(); //finish

function setup(){

	setInterval(draw(), 1000/60);
}
function draw(canvas){

}
function collision(){
	puckCollision();
}
function puckCollision(){
	var y = puck.center.y;
	var x = puck.center.x;
	var r = puck.r;
	// first, check collision with bottom wall
	if(y - r <= 0 && x - r >= Rink.r && x + r <= Rink.width - Rink.r) console.log("bottom wall collision");
	// next, check collision with left wall
	if(x - r <= 0 && y - r >= Rink.r && y + r <= Rink.height - Rink.r) console.log("left wall collision");
	// next, check collision with top wall
	if(y+r >= Rink.height && x - r >= Rink.r && x + r <= Rink.width - Rink.r) console.log("top wall collision");
	// next, check collision with right wall
	if(x + r >= Rink.width && y - r >= Rink.r && y + r <= Rink.height - Rink.r) console.log("right wall collision");
	for(var i = 0; i < Rink.circles.length; i++){
		var circle = Rink.circles[i];
		if(circle.distanceToPoint(puck.center) <= r) {
			console.log("collided with circle?");
			switch(quadrant){
				case 1: // top right circle
					if(x <= Rink.width && x >= Rink.width - Rink.r && y >= Rink.r*3 && y<=Rink.height) console.log("yeah, quad 1 collision");
				case 2: // top left circle
					if(x <= Rink.r && x >= 0 && y >= Rink.r && y <= Rink.r*2) console.log("yeah quad 2 collision");
				case 3: // bottom left circle
					if(x <= Rink.r && x >= 0 && y >= 0 && y <= Rink.r) console.log("yeah quad 3 collision");
				case 4: // bottom right circle
					if(x <= Rink.width && x>= Rink.width - Rink.r && y >= 0 && y <= Rink.r) console.log("yeah quad 4 collision");
			}
		}
	}


}