module.exports = class Box {
    constructor(botLeft, width, height) {
        this.botLeft = botLeft
        this.x = botLeft.x;
        this.y = botLeft.y;
        this.width = width;
        this.height = height;
    }
    draw(canvas, color) {
        console.log("draw Box")
    }
    collidesBox(box) {
        if (this.x < box.x + box.width && this.x + this.width > box.x && this.y < box.y + box.height && this.y + this.height > box.height) return true;
        else return false;
    }
    collides(circle) {
        return this.collidesAngled(circle, 0);
    }
    collidesAngled(circle, theta) {
        var width = this.width;
        var height = this.height;

        var centerX = this.x + width / 2;
        var centerY = this.y + height / 2;
        // // console.log(centerX+"center "+centerY);
        // var unrotatedCircleX = Math.cos(theta) * (circle.center.x - centerX) - Math.sin(theta)*(circle.center.y - centerY) + centerX;
        // var unrotatedCircleY = Math.sin(theta) * (circle.center.x - centerX) + Math.cos(theta) * (circle.center.y - centerY) + centerY;


        var closestX, closestY;
        var rectX = this.x;
        var rectY = this.y ;

        // if(unrotatedCircleX < rectX) closestX = rectX;
        // else if(unrotatedCircleX  > rectX + this.width) closestX = rectX + this.width;
        // else closestX = unrotatedCircleX;

        // if(unrotatedCircleY < rectY){
        // 	closestY = rectY;
        // }

        // else if(unrotatedCircleY > rectY + this.height) {

        // 	closestY = rectY + this.height;
        // }
        // else closestY = unrotatedCircleY;
        // // console.log(unrotatedCircleY)
        // // console.log(closestX+" "+closestY)	
        // var collision = false;
        // var distance = Math.sqrt(Math.pow(unrotatedCircleX-rectX,2)+Math.pow(unrotatedCircleY-rectY, 2));
        // if (distance < circle.radius) collision = true;
        // return collision;

        var unrotatedCircleX = Math.cos(theta) * (circle.center.x - centerX) - Math.sin(theta) * (circle.center.y - centerY) + centerX;
        var unrotatedCircleY = Math.sin(theta) * (circle.center.x - centerX) + Math.cos(theta) * (circle.center.y - centerY) + centerY;

        // Closest point in the rectangle to the center of circle rotated backwards(unrotated)
        // var closestX, closestY; 
        // Find the unrotated closest x point from center of unrotated circle
        if (unrotatedCircleX < rectX)
            closestX = rectX;
        else if (unrotatedCircleX > rectX+ this.width)
            closestX = rectX + this.width;
        else
            closestX = unrotatedCircleX;
        // Find the unrotated closest y point from center of unrotated circle
        if (unrotatedCircleY < rectY)
            closestY = rectY;
        else if (unrotatedCircleY > rectY + this.height)
            closestY = rectY + this.height;
        else
            closestY = unrotatedCircleY;

        // Determine collision
        var collision = false;

        var distance = Math.sqrt((unrotatedCircleX-closestX)*(unrotatedCircleX-closestX)+(unrotatedCircleY-closestY)*(unrotatedCircleY-closestY));
        if (distance < circle.radius)
            collision = true; // Collision
        else
            collision = false;

        return collision
    }
}