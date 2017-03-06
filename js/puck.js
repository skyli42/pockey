var Circle = require('./circle')
var Vector = require('./vector');
module.exports = class Puck{
	constructor(pos, r){
		this.pos = pos;
		this.r = r;
		this.circle = new Circle(pos, r);
		this.mass = 20; // random const, change if need be
		this.velocity = new Vector(0, 0);
	}
	draw(canvas){
		this.circle.draw(canvas);
	}
	move(){
		this.pos.x+=this.velocity.x;
		this.pos.y+=this.velocity.y;
		this.velocity.x*=.9;
		this.velocity.y*=.9;
		this.circle = new Circle(this.pos, this.r);
	}
}