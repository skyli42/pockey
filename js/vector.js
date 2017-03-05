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
	dotProduct(v2){
		return this.x*v2.x + this.y+v2.y;
	}
	multiply(v2){
		this.x*=v2.x;
		this.y*=v2.y;
	}
	subtract(v2){
		this.x -= v2.x;
		this.y -= v2.y;
	}
}