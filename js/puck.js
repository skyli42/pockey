var Circle = require('./circle')
module.exports = class Puck{
	constructor(pos, r){
		this.pos = pos;
		this.r = r;
		this.circle = new Circle(pos, r);
		this.mass = 20; // random const, change if need be
		this.velocity.x = 0;
		this.velocity.y = 0;
	}
	draw(canvas){
		this.circle.draw(canvas);
	}
	move(){
		this.pos.x+=this.velocity.x;
		this.pos.y+=this.velocity.y;
		this.velocity.x*=.9;
		this.velocity.y*=.9;
		this.circle = new Circle(pos, r);
	}
}