const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

var redis = require('redis');

var pub = redis.createClient(6379, 'localhost');
var sub = redis.createClient(6379, 'localhost');
const redisAdapter = require('socket.io-redis');

io.adapter( redisAdapter({pubClient: pub, subClient: sub}) );
pub.on("error", function(error) {
  console.error(error);
});
pub.set("key", "value", redis.print);
pub.get("key", redis.print);
io.on('connection', socket => {
  console.log('socket connected')
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});