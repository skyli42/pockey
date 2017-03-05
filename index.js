var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var util = require('util');
var Game = require("./js/game");
var game = new Game();
app.use(express.static("./assets"));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

console.log(util.inspect(game.rink.draw.toString(), {depth: null, maxArrayLength: null}))

io.on('connection', function(socket) {
    console.log('a user connected');
    setInterval(function() {
        game.update();
        // var send = {};
        // send.draw = game.rink.draw;
        // console.log(JSON.stringify(send))
        socket.emit('update', JSON.stringify(send));
    }, 1000 / 60);
});




server.listen(app.listen(process.env.PORT || 0118, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}));