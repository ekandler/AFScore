var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/manage', function(req, res){
  res.sendfile('manage.html');
});

app.use("/script", express.static(__dirname + '/script'));

game_time = null;
scoreboard = null;

var fs = require('fs');

// file is included here:
eval(fs.readFileSync(__dirname + '/script/Game_Time.js')+'');
	  
io.on('connection', function(socket){
  io.emit('game time', game_time);
  io.emit('scoreboard', scoreboard);
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
  socket.on('game time', function(time) {
    game_time = time;
    io.emit('game time', time);
	
  });
  
  socket.on('scoreboard', function(score) {
    scoreboard = score;
    io.emit('scoreboard', score);
  });
  
  
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


function doTimerTick() {
    if (game_time != null) {
		//console.log(game_time.time_seconds);
		//game_time.tick();
		var doTick = Game_Time.prototype.tick.bind(game_time);
		if (doTick()) io.emit('game time', game_time);
	}
	setTimeout(doTimerTick, 1000);    
}

doTimerTick();
