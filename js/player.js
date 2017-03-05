var Vector = require('./vector')
var Point = require('./point')
module.exports = class Player{
	constructor(pos, team, r, id){
		this.pos = pos;
		this.team = team;
		this.angle = 0;
		this.r = r;
		this.collision = new Box(new Point(this.pos.x-(this.r*Math.sqrt(2)/2), this.pos.y-(this.r*Math.sqrt(2)/2)), this.r*Math.sqrt(2), this.r*Math.sqrt(2));
		this.stick = new Box(new Point(this.pos.x-(this.r*Math.sqrt(2)/4), this.pos.y+(this.r*Math.sqrt(2)/2)), this.r*Math.sqrt(2), this.r*3*Math.sqrt(2)/4);
		this.stickVelocity = 0;
		this.velocity = new Vector(0, 0);
		this.id = id;
	}
	setAngle(angle){
		this.angle = angle;
	}
	move(){
		this.pos.x += this.velocity.x;
		this.pos.y += this.velocity.y;
	}
	draw(canvas){
		canvas.save();
		//stick
		canvas.translate(this.pos.x, this.pos.y);
		canvas.rotate(angle);

		canvas.rect(this.stick.pos.x-this.pos.x, this.stick.pos.y-this.pos.y, this.stick.width, this.stick.height);
		canvas.stroke();
		ctx.beginPath();
		ctx.arc(0,0,this.r,0,2*Math.PI);
		//circle
		canvas.restore();
	}
}