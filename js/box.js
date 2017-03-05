module.exports = class Box{
	constructor(botLeft, width, height){
		this.botLeft = botLeft
		this.x = botLeft.x;
		this.y = botLeft.y;
		this.width = width;
		this.height = height;
	}
	draw(canvas, color){
		console.log("draw Box")
	}
	collidesBox(box){
		if (this.x < box.x + box.width && this.x + this.width > box.x && this.y < box.y + box.height && this.y + this.height > box.height) return true;
		else return false;
	}
	collides(circle){
		return this.collidesAngled(circle, 0);
	}
	collidesAngled(circle, theta){
		var width = this.width;
		var height = this.height;
		
		var centerX = this.x+width/2;
		var centerY = this.y+height/2;
		var unrotatedCircleX = Math.cos(theta) * (circle.center.x - centerX) - Math.sin(theta)*(circle.center.y - centerY) + centerX;
		var unrotatedCircleY = Math.sin(theta) * (circle.center.x - centerX) + Math.cos(theta) * (circle.y - centerY) + centerY;

		var closestX, closestY;
		var rectX = this.x;
		var rectY = this.y + height;

		if(unrotatedCircleX < rectX) closestX = rectX;
		else if(unrotatedCircleX  > rectX + this.width) closestX = rectX + this.width;
		else closestX = unrotatedCircleX;

		if(unrotatedCircleY < rectY){
			closestY = rectY;
		}
		else if(unrotatedCircleY > rectY - this.height) closestY = rectY - this.height;
		else closestY = unrotatedCircleY;

		var collision = false;
		var distance = Math.sqrt(Math.pow(unrotatedCircleX-rectX,2)+Math.pow(unrotatedCircleY-rectY, 2));
		if (distance < circle.radius) collision = true;
		return collision;
	}
}
