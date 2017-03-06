var Vector = require('./vector')
var Point = require('./point')
var Box = require('./box')
module.exports = class Player{
	constructor(pos, team, r){
		this.pos = pos;
		this.team = team;
		this.angle = 0;
		this.r = r;
		this.collision = new Box(new Point(this.pos.x-(this.r*Math.sqrt(2)/2), this.pos.y-(this.r*Math.sqrt(2)/2)), this.r*Math.sqrt(2), this.r*Math.sqrt(2));
		this.stick = new Box(new Point(this.pos.x-(this.r*Math.sqrt(2)/4), this.pos.y+(this.r*Math.sqrt(2)/2)), this.r*Math.sqrt(2), this.r*3*Math.sqrt(2)/4);
		this.stickVelocity = 10;
		this.velocity = new Vector(0, 0);
	}
	setAngle(angle){
		this.angle = angle;
	}
	move(){
		this.pos.x += this.velocity.x;
		this.pos.y += this.velocity.y;
		this.stick = new Box(new Point(this.pos.x-(this.r*Math.sqrt(2)/4), this.pos.y+(this.r*Math.sqrt(2)/2)), this.r*Math.sqrt(2), this.r*3*Math.sqrt(2)/4);

	}
}