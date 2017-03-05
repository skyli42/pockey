module.exports = class Stick{
	constructor(box, vector){
		this.box = box;
		this.vector = vector; 
	}
	draw(canvas){
		canvas.save();
		canvas.rotate(this.vector.direction());
		this.box.draw(canvas);
		canvas.restore();
	}
}