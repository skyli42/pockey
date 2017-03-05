var express=require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var players=new Map();

app.use(express.static("./assets"));
app.get('/', function(req, res){
	res.sendFile(__dirname+ '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	
});


server.listen(app.listen(process.env.PORT || 0118, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
}));