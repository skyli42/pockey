var Box = require('./box');
require('./rink');
module.exports = class Goal{
	constructor(frontLeft, bottomLeft, frontRight, bottomRight, rink, side){
		this.frontLeft = frontLeft;
		this.bottomLeft = bottomLeft;
		this.frontRight = frontRight;
		this.bottomRight = bottomRight;
		this.scoreBox = new Box(bottomLeft.x, bottomLeft.y, Math.abs(bottomRight.x - bottomLeft.x), Math.abs(topLeft.y - bottomLeft.y));
		if(side == "left"){
			this.bottomBox = new Box(3*rink.r / 5, rink.r, rink.r/5, 2*rink.r);
			this.leftBox = new Box(4*rink.r/5, 14*rink.r/5, 4*rink.r/5, rink.r/5);
			this.rightBox = new Box(4*rink.r/5, rink.r, 4*rink.r/5, rink.r/5);
		}
		else{
			this.bottomBox = new Box(rink.width-(4*rink.r/5), rink.r, rink.r/5, 2*rink.r);
			this.leftBox = new Box(rink.width-(8*rink.r/5), rink.r, 4*rink.r/5, rink.r/5);
			this.rightBox = new Box(rink.width-(8*rink.r/5), 14*rink.r/5, 4*rink.r/5, rink.r/5);
		}
	}
	checkScore(puck){
			if(puck.center.x < scoreBox.x + scoreBox.width && puck.center.x > scoreBox.x && puck.center.y < scoreBox.y + scoreBox.height && puck.center.y > scoreBox.y) return true;
			else return false;
	}	
}