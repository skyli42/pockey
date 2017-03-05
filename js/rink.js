var Circle = require("./circle")
var Box = require("./box")

module.exports = class Rink{
	constructor(){
		this.width = 4700;
		this.height = 2000;
		this.r = height / 4;
		this.circles = [];
		this.boxes = [];
		this.goals = [];
		circles.push(new Circle(this.r, this.r, this.r));
		circles.push(new Circle(this.r, this.height - this.r, this.r));
		circles.push(new Circle(this.width - this.r, this.r, this.r));
		circles.push(new Circle(this.width-this.r, this.height-this.r, this.r));
		boxes.push(new Box(this.r, 0, this.width - 2*this.r, this.height)); //center box
		boxes.push(new Box(0, this.r, this.r, this.r*2));
		boxes.push(new Box(this.width-this.r, this.r, this.r, this.r*2));
	}
	draw(canvas){
		for(var i =0; i<4; i++){
			this.circles[i].draw(canvas, 'white');
		}
		for(var i = 0; i<3; i++){
			this.boxes[i].draw(canvas, 'white');
		}
	}
}