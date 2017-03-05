require('circle')
module.exports = class Puck{
	constructor(circle){
		this.circle = circle;
		this.mass = 20; // random const, change if need be
	}
	draw(){
		this.circle.draw();
	}
}