var Vector = require('./vector')
module.exports = class Player{
	constructor(pos, team, r){
		this.pos = pos;
		this.team = team;
		this.angle = 0;
		this.r = r;
		this.collision = new Box();
		this.stick = new Box();

	}
	draw(canvas){

	}
}