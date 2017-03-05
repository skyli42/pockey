module.exports = class Vector{
	constructor(xComponent, yComponent){
		this.x = xComponent;
		this.y = yComponent;
	}
	magnitude(){
		return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
	}
	direction(){
		return Math.atan2(this.y, this.x);
	}
}