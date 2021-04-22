var http = require('http');
var axios = require('axios');
var request = require('request');
var cheerio = require('cheerio');
var cors = require('cors')
var bodyParser = require('body-parser');
const jsdom = require("jsdom");
const express = require('express')
const app = express()

const stringLength = require('string-length');
var router = express.Router();
var SocketEmitter = require('socket.io-emitter');
var redis = require('redis');

var apiResults=[];
keyword_queue = [];
firstKeywordQueue = [];
var isWorking = false;
app.set('view engin', 'html');
const server = http.createServer(app);
var router = express.Router();
keyword_queue = [];
firstKeywordQueue = [];
app.use(bodyParser.json());
app.use(cors());
app.set('view engin', 'html');
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};
app.use(allowCrossDomain);
const io = require('socket.io')(server, {
  serveClient: true,
  cors: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET,POST",
    "Access-Control-Allow-Headers": "my-custom-header",
    "Access-Control-Allow-Credentials": true
  }
})
var pub = redis.createClient(6379, 'localhost');
var sub = redis.createClient(6379, 'localhost');
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ pubClient: pub, subClient: sub }));
app.set('socketio', io);
const port = 3000
var redisConfig = {
  redis: {
    host: 'localhost',
    port: 6379
  },
}

class scrabeRedis {
  constructor(redisConfig) {
    this.redisConfig = redisConfig;
    this.socketEmitter = null;
  }

  connectSocketServer() {
    try {
      const redisClient = redis.createClient(this.redisConfig);
      this.socketEmitter = SocketEmitter(redisClient);
      console.log(`connectSocketServer - running`);
    } catch (error) {
      console.log('Error connectSocketServer', error);
    }
  }

  emit(member_id, event, payload) {
    if (!this.socketEmitter) return;

    this.socketEmitter.to(member_id).emit(event, payload);
  }

  emitToAll(event, payload) {
    if (!this.socketEmitter) return;

    this.socketEmitter.emit(event, payload);
  }
}
const scraberedis = new scrabeRedis(redisConfig.redis);
app.post('/', (req, res) => {
 var array = [];
  array=req.body;
  scraberedis.emitToAll('deneme'+array.token, {array});
});
app.post('/panel', (req, res) => {
 var array = [];
  array=req.body;
  console.log(array,'reqbody2');
res.send('geldii')
});
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}).sockets
module.exports = app;
scraberedis.connectSocketServer();
module.exports = server;