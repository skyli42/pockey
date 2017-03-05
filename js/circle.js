require('./point')
module.exports = class Circle{
	constructor(center,radius, quadrant){
		this.center = center;
		this.radius = radius;
		this.quadrant = quadrant;
	}
	distanceToPoint(point){
		//abs(sqrt((x1-h)^2+(y1-k)^2)-r)
		var x = point.x;
		var y = point.y;
		return Math.abs(Math.sqrt(Math.pow(x-this.x, 2)+Math.pow(y-this.y, 2))-r)
	}
	draw(canvas){
		//tbd
		
	}
}