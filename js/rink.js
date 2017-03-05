var Circle = require("./circle")
var Box = require("./box")
var Point = require('./point')
var Goal = require("./goal")

function Rink(){
	// constructor(){
		this.width = 4700;
		this.height = 2000;
		this.r = this.height / 4;
		this.circles = [];
		this.boxes = [];
		this.goals = [];
		this.circles.push(new Circle(new Point(this.r, this.r), this.r, 3));
		this.circles.push(new Circle(new Point(this.r, this.height - this.r), this.r, 2));
		this.circles.push(new Circle(new Point(this.width - this.r, this.r), this.r, 4));
		this.circles.push(new Circle(new Point(this.width-this.r, this.height-this.r), this.r, 1));
		this.boxes.push(new Box(new Point(this.r, 0), this.width - 2*this.r, this.height)); //center box
		this.boxes.push(new Box(new Point(0, this.r), this.r, this.r*2));
		this.boxes.push(new Box(new Point(this.width-this.r, this.r), this.r, this.r*2));
		this.goals.push(new Goal(new Point(4*this.r/5, 14*this.r/5), new Point(4*this.r/5, 6*this.r/5), new Point(8*this.r/5, 14*this.r/5), new Point(8*this.r/5, 6*this.r/5), this, "left"));
		this.goals.push(new Goal(new Point(this.width-(8*this.r/5), 14*this.r/5), new Point(this.width-(8*this.r/5), 6*this.r/5), new Point(this.width-(4*this.r/5), 14*this.r/5), new Point(this.width-(4*this.r/5), 6*this.r/5), this, "right"))

	// }
}
module.exports = Rink;