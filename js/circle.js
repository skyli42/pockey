module.exports = class Circle{
	constructor(x, y, radius){
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	distanceToPoint(x, y){
		//abs(sqrt((x1-h)^2+(y1-k)^2)-r)
		return Math.abs(Math.sqrt(Math.pow(x-this.x, 2)+Math.pow(y-this.y, 2))-r)
	}
	draw(canvas, color){
		//tbd
	}
}