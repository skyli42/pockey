var Box = require('box');
module.exports = class Goal{
	constructor(frontLeft, bottomLeft, frontRight, bottomRight){
		this.frontLeft = frontLeft;
		this.bottomLeft = bottomLeft;
		this.frontRight = frontRight;
		this.bottomRight = bottomRight;
		this.scoreBox = new Box(bottomLeft.x, bottomLeft.y, Math.abs(bottomRight.x - bottomLeft.x), Math.abs(topLeft.y - bottomLeft.y));
		this.leftBox = new Box(bottomLeft.x








			)
	}
}