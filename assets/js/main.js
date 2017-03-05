var dimensions = {
    width: $(window).width(),
    height: $(window).height()
};
console.log(dimensions)
$('#canvas').css(dimensions).prop(dimensions);
var socket = io();

function drawPuck(ctx, puck, scale) {
    ctx.beginPath();
    ctx.arc(puck.pos.x * scale, puck.pos.y * scale, puck.r * scale, 0, 2 * Math.PI);
    ctx.stroke();
}
function drawRink(ctx, rink, scale) {
    //semicircles
    var cur = rink.circles[0];
    ctx.beginPath();
    ctx.arc(cur.center.x * scale, cur.center.y * scale, cur.radius * scale, Math.PI, 3 / 2 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    cur = rink.circles[1]
    ctx.beginPath();
    ctx.arc(cur.center.x * scale, cur.center.y * scale, cur.radius * scale, 1 / 2 * Math.PI, Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    cur = rink.circles[2];
    ctx.beginPath();
    ctx.arc(cur.center.x * scale, cur.center.y * scale, cur.radius * scale, 3 / 2 * Math.PI, 0, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    cur = rink.circles[3];
    ctx.beginPath();
    ctx.arc(cur.center.x * scale, cur.center.y * scale, cur.radius * scale, 0, 1 / 2 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    var boxes = rink.boxes;
    var midLength = boxes[0].width * scale;
    var midHeight = boxes[0].height * scale;
    var sideLength = boxes[1].width * scale;
    var sideHeight = boxes[1].height * scale;
    ctx.beginPath();
    ctx.moveTo(rink.r * scale, 0);
    ctx.lineTo((rink.width - rink.r) * scale, 0);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rink.r * scale, rink.height * scale);
    ctx.lineTo((rink.width - rink.r) * scale, rink.height * scale);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, rink.r * scale);
    ctx.lineTo(0, (rink.height - rink.r) * scale);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rink.width * scale, rink.r * scale);
    ctx.lineTo(rink.width * scale, (rink.height - rink.r) * scale);
    ctx.lineWidth = 10;
    ctx.stroke();
    //walls


    //goals
    var r = rink.r;
    ctx.beginPath();
    ctx.moveTo(4*r/5*scale, 6*r/5*scale);
    ctx.lineTo(8*r/5*scale, 6*r/5*scale);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(4*r/5*scale, 6*r/5*scale);
    ctx.lineTo(4*r/5*scale, (rink.height-6*r/5)*scale);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(4*r/5*scale, (rink.height-6*r/5)*scale);
    ctx.lineTo(8*r/5*scale, (rink.height-6*r/5)*scale);
    ctx.lineWidth = 10;
    ctx.stroke();


    var w = rink.width;
    var h = rink.height;
    ctx.beginPath();
    ctx.moveTo((w-4*r/5)*scale, 6*r/5*scale);
    ctx.lineTo((w-8*r/5)*scale, 6*r/5*scale);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((w-4*r/5)*scale, 6*r/5*scale);
    ctx.lineTo((w-4*r/5)*scale, (h-6*r/5)*scale);
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((w-4*r/5)*scale, (rink.height-6*r/5)*scale);
    ctx.lineTo((w-8*r/5)*scale, (rink.height-6*r/5)*scale);
    ctx.lineWidth = 10;
    ctx.stroke();
}
// function drawPlayers(ctx, players, scale){
//     players.forEach(function(value, key, map){
//         console.log(value);
//         ctx.beginPath();
//         ctx.arc(value.pos.x*scale, value.pos.y*scale, value.r * scale, 0, 2 * Math.PI);
//         ctx.stroke();
        
//         ctx.save();
//         //stick
//         ctx.translate(value.pos.x, value.pos.y);
//         ctx.rotate(value.angle);

//         ctx.rect(value.stick.pos.x-value.pos.x, value.stick.pos.y-value.pos.y, value.stick.width, value.stick.height);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.arc(0,0,value.r,0,2*Math.PI);
//         //circle
//         ctx.restore();
//     })
// }
socket.on('update', function(msg) {
    console.log("hi")
    var game = msg;
    var puck = game.puck
    var players = game.players;
    var rink = game.rink;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var scale = canvas.width / game.rink.width;
    drawPuck(ctx, puck, scale);
    drawRink(ctx, rink, scale);
    // drawPlayers(ctx, players, scale);
})