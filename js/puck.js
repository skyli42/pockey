var Circle require('./circle')
module.exports = class Puck{
	constructor(pos, r){
		this.pos = pos;
		this.r = r;
		this.circle = new Circle(pos, r);
		this.mass = 20; // random const, change if need be
	}
	draw(canvas){
		this.circle.draw(canvas);
	}
}