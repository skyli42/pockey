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
app.get('/display', function(req, res) {
    res.sendFile(__dirname + "/assets/Display.html");
})
app.get('/player', function(req, res) {
    res.sendFile(__dirname + "/assets/Player.html");
})
var started = false;
io.on('connection', function(socket) {
    console.log('a user connected');
    setInterval(function() {
        game.update();
        socket.emit('update', game);
    }, 1000 / 60);
    socket.on("new player", function() {
        game.addPlayer(socket.client.id);
    })
    socket.on('disconnect', function() {
        game.removePlayer(socket.client.id);
    })
    socket.on('update', function(msg) {
        game.movePlayer(socket.client.id, msg);
    });
});



server.listen(app.listen(process.env.PORT || 0118, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}));