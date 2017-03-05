var Circle = require("./circle")
var Box = require("./box")
var Point = require('./point')
module.exports = class Rink{
	constructor(){
		this.width = 4700;
		this.height = 2000;
		this.r = height / 4;
		this.circles = [];
		this.boxes = [];
		this.goals = [];
		circles.push(new Circle(new Point(this.r, this.r), this.r, 3));
		circles.push(new Circle(new Point(this.r, this.height - this.r), this.r, 2));
		circles.push(new Circle(new Point(this.width - this.r, this.r), this.r, 4));
		circles.push(new Circle(new Point(this.width-this.r, this.height-this.r), this.r, 1));
		boxes.push(new Box(new Point(this.r, 0), this.width - 2*this.r, this.height)); //center box
		boxes.push(new Box(new Point(0, this.r), this.r, this.r*2));
		boxes.push(new Box(new Point(this.width-this.r, this.r), this.r, this.r*2));
		goals.push(new Goal(new Point(), new Point(), new Point(), new Point(), this, "left"));
		goals.push(new Goal(new Point(), new Point(), new Point(), new Point(), this, "right"))

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