
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("this bitch is running2")

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection) //new connection event function

function newConnection(socket) {
  console.log('new connection : ' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
      socket.broadcast.emit('mouse', data); // to everyone else not self
      //io.sockets.emit('mouse', data); // sends data to all incuding sender
      console.log(data);
  }
}
