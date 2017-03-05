module.exports = class Box{
	constructor(botLeft, width, height){
		this.botLeft = botLeft
		this.x = botLeft.x;
		this.y = botLeft.y;
		this.width = width;
		this.height = height;
	}
	draw(canvas, color){
		//tbd
	}
}
