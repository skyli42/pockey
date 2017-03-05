var Rink = require("./rink");
var Puck = require("./puck");
var Point = require("./point");
var Vector = require("./vector");
var Player = require('./player');
module.exports = class Game {
    constructor() {
        this.players = {};
        this.rink = new Rink();
        this.r = 500;
        this.puck = new Puck(new Point(4700 / 2, 2000 / 2), this.r / 20);
        this.score = 0;
    }

    update() {
        for(var attr in this.players){
            var player = this.players[attr];
            this.collision();
            player.move();
            
        }
    }
    movePlayer(id, data) {
        // console.log('move')
        var player = this.players[id];
        //update for player
        if (data.dX != undefined&&player!= undefined) {
            var dx = data.dX;
            var dy = data.dY;
            var alpha = data.alpha;
            var a = data.a;
            player.stickVelocity = a;
            console.log(player.velocity)
            console.log(player.pos)
            player.angle = alpha / 180 * Math.PI;
            player.velocity.x = dx / 100.0;
            player.velocity.y = dy / 100.0;
        }
    }
    addPlayer(id) {
        var player = new Player(new Point(2 * this.r, 2 * this.r), 0, this.r / 10);
        this.players[id] = player;
    }
    removePlayer(id) {
        delete this.players[id];
    }
    collision() {
        this.puckCollision();
        var players = this.players;
        for (var it in this.players) {
            for (var iq in this.players) {
                if(it != iq)
                if (players[it].collision.collidesBox(players[iq].collision)) {
                    players[it].velocity.x = 0;
                    players[it].velocity.y = 0;
                    players[iq].velocity.x = 0;
                    players[iq].velocity.y = 0;
                }
            }
        }
    }

    puckCollision() {
        var puck = this.puck;
        var y = this.puck.pos.y;
        var x = this.puck.pos.x;
        var r = this.puck.r;
        // first, check collision with bottom wall
        if (y - r <= 0 && x - r >= this.rink.r && x + r <= this.rink.width - this.rink.r) {
            console.log("bottom wall collision");
            this.puckDeflect();
        }
        // next, check collision with left wall
        if (x - r <= 0 && y - r >= this.rink.r && y + r <= this.rink.height - this.rink.r) {
            console.log("left wall collision");
            this.puckDeflect();
        }
        // next, check collision with top wall
        if (y + r >= this.rink.height && x - r >= this.rink.r && x + r <= this.rink.width - this.rink.r) {
            console.log("top wall collision");
            this.puckDeflect();
        }
        // next, check collision with right wall
        if (x + r >= this.rink.width && y - r >= this.rink.r && y + r <= this.rink.height - this.rink.r) {

            console.log("right wall collision");
            this.puckDeflect();
        }
        for (var i = 0; i < this.rink.circles.length; i++) {
            var circle = this.rink.circles[i];
            if (circle.distanceToPoint(puck.pos) <= r) {
                console.log("collided with circle?");
                switch (quadrant) {
                    case 1: // top right circle
                        if (x <= this.rink.width && x >= this.rink.width - this.rink.r && y >= this.rink.r * 3 && y <= this.rink.height) console.log("yeah, quad 1 collision");
                    case 2: // top left circle
                        if (x <= this.rink.r && x >= 0 && y >= this.rink.r && y <= this.rink.r * 2) console.log("yeah quad 2 collision");
                    case 3: // bottom left circle
                        if (x <= this.rink.r && x >= 0 && y >= 0 && y <= this.rink.r) console.log("yeah quad 3 collision");
                    case 4: // bottom right circle
                        if (x <= this.rink.width && x >= this.rink.width - this.rink.r && y >= 0 && y <= this.rink.r) console.log("yeah quad 4 collision");
                }
            }
        }
        for (var i = 0; i < this.rink.goals.length; i++) {
            var goal = this.rink.goals[i];
            console.log("puck collides with scoreBox " + goal.side + " ? " + goal.scoreBox.collides(puck.circle));
            console.log("puck collides with bottomBox " + goal.side + " ? " + goal.bottomBox.collides(puck.circle));
            console.log("puck collides with leftBox " + goal.side + " ? " + goal.leftBox.collides(puck.circle));
            console.log("puck collides with rightBox " + goal.side + " ? " + goal.rightBox.collides(puck.circle));
        }
        for (var i in this.players) {
            var players = this.players;
            console.log("puck collides with stick of " + players[i].id + " ? " + players[i].stick.collidesAngled(puck.circle, players[i].angle));
            if (players[i].stick.collidesAngled(puck.circle, players[i].angle)) {
                shot(players[i]);
            }
        }

    }
    puckDeflect() {
        var puck = this.puck;
        var xc = puck.pos.x;
        var yc = puck.pos.y;
        var r = puck.r;
        var xr = puck.pos.x + puck.velocity.x;
        var yr = puck.pos.y + puck.velocity.y;

        var x = xc + ((r * (xr - xc)) / (Math.sqrt(Math.pow(xr - xc, 2) + Math.pow(yr - yc, 2))));
        var y = yc + ((r * (yr - yc)) / (Math.sqrt(Math.pow(xr - xc, 2) + Math.pow(yr - yc, 2))));

        if (yc - y == 0) {
            puck.velocity.x *= -1;
            return;
        } else if (xc - x == 0) {
            puck.velocity.y *= -1;
            return;
        }
        var m = (yc - y) / (xc - x);

        var t_hat = new Vector(1 / Math.sqrt(1 + m * m), m / math.sqrt(1 + m * m));
        var parallelScalar = puck.velocity.dotProd(t_hat);

        var v_hat = new Vector(1 / Math.sqrt(1 + 1 / (m * m)), (-1 / m) / (Math.sqrt(1 + 1 / (m * m))));
        var perpScalar = puck.velocity.dotProd(v_hat);

        t_hat.multiply(parallelScalar);
        v_hat.multiply(perpScalar);

        t_hat.subtract(v_hat);

        puck.velocity.x = t_hat.x;
        puck.velocity.y = t_hat.y;


    }

    shot(player) {
        var stickVector = new Vector(player.stickVelocity * Math.cos(player.angle), player.stickVelocity * Math.sin(player.angle));
        puck.velocity.add(stickVector);

    }
}