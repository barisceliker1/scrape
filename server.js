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
keyword_queue = [];
firstKeywordQueue = [];
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(cors());
var isWorking = false;
app.set('view engin', 'html');
var port =6000;
app.post('/', (req, res, next) => {
  firstKeywordQueue.push({
    colonial_name: req.body.colonial_name,
    website: req.body.website,
    device: req.body.device,
    keyword: req.body.keyword,
    language: req.body.language,
  })
  res.send(firstKeywordQueue);
  if (!isWorking) {
    scrabe();
    res.send('geldi');
    isWorking=true;
  }else{
    console.log('giremedi')
    isWorking=true;
  }
});
app.post('/panel', (req, res) => {
  console.log('burdan girer')
  global.request_id = Math.random();
  keyword_queue.push({
    colonial_name: req.body.colonial_name,
    website: req.body.website,
    device: req.body.device,
    keyword: req.body.keyword,
    language: req.body.language,
  })
});

async function scrabe() {
  token = md5("7A12")

  console.log('scrabe giriş')
  if (!isWorking) {
    console.log('working giriş')
    console.log(keyword_queue,'working giriş')
    while (true) {
      if (firstKeywordQueue.length > 0) {
        console.log('giremiyor2')

        if (keyword_queue.length >= 0) {
          let work;
          console.log('giremiyor')
          if (firstKeywordQueue.length > 0) {
            work = firstKeywordQueue[0]
            firstKeywordQueue.shift();
            console.log('silindi', work)
          } else if (keyword_queue.length > 0) {
            console.log('çıktı dsada')
            work = keyword_queue.shift();
          }
          console.log('girer')
          const colonial_name = work.colonial_name;
          const device = work.device;
          const website = work.website;
          const keyword = work.keyword;
          const language = work.language;
          const colonialNameLength = colonial_name.length;
          if (language == 'english') {
            global.len = 'en';
          } else if (language == 'arabic') {
            global.len = 'ar';
          } else {
            global.len = 'tr';
          }
          if (colonialNameLength == 4) {
            var first_sayi = 'E';
          } else if (colonialNameLength == 5) {
            var first_sayi = 'F';
          } else if (colonialNameLength == 6) {
            var first_sayi = 'G';
          } else if (colonialNameLength == 7) {
            var first_sayi = 'H';
          } else if (colonialNameLength == 8) {
            var first_sayi = 'I';
          } else if (colonialNameLength == 9) {
            var first_sayi = 'J';
          } else if (colonialNameLength == 10) {
            var first_sayi = 'K';
          } else if (colonialNameLength == 11) {
            var first_sayi = 'L';
          } else if (colonialNameLength == 12) {
            var first_sayi = 'M';
          } else if (colonialNameLength == 13) {
            var first_sayi = 'N';
          } else if (colonialNameLength == 14) {
            var first_sayi = 'O';
          } else if (colonialNameLength == 15) {
            var first_sayi = 'P';
          } else if (colonialNameLength == 16) {
            var first_sayi = 'Q';
          } else if (colonialNameLength == 17) {
            var first_sayi = 'R';
          } else if (colonialNameLength == 18) {
            var first_sayi = 'S';
          } else if (colonialNameLength == 19) {
            var first_sayi = 'T';
          } else if (colonialNameLength == 20) {
            var first_sayi = 'U';
          } else if (colonialNameLength == 21) {
            var first_sayi = 'V';
          } else if (colonialNameLength == 22) {
            var first_sayi = 'W';
          } else if (colonialNameLength == 23) {
            var first_sayi = 'X';
          } else if (colonialNameLength == 24) {
            var first_sayi = 'Y';
          } else if (colonialNameLength == 25) {
            var first_sayi = 'Z';
          } else if (colonialNameLength == 26) {
            var first_sayi = 'a';
          } else if (colonialNameLength == 27) {
            var first_sayi = 'b';
          } else if (colonialNameLength == 28) {
            var first_sayi = 'c';
          } else if (colonialNameLength == 29) {
            var first_sayi = 'd';
          } else if (colonialNameLength == 30) {
            var first_sayi = 'e';
          } else if (colonialNameLength == 31) {
            var first_sayi = 'f';
          } else if (colonialNameLength == 32) {
            var first_sayi = 'g';
          } else if (colonialNameLength == 33) {
            var first_sayi = 'h';
          } else if (colonialNameLength == 34) {
            var first_sayi = 'i';
          } else if (colonialNameLength == 35) {
            var first_sayi = 'j';
          } else if (colonialNameLength == 36) {
            var first_sayi = 'k';
          } else if (colonialNameLength == 37) {
            var first_sayi = 'ı';
          } else if (colonialNameLength == 38) {
            var first_sayi = 'm';
          } else if (colonialNameLength == 39) {
            var first_sayi = 'n';
          } else if (colonialNameLength == 40) {
            var first_sayi = 'o';
          } else if (colonialNameLength == 41) {
            var first_sayi = 'p';
          } else if (colonialNameLength == 42) {
            var first_sayi = 'q';
          } else if (colonialNameLength == 43) {
            var first_sayi = 'r';
          } else if (colonialNameLength == 44) {
            var first_sayi = 's';
          } else if (colonialNameLength == 45) {
            var first_sayi = 't';
          } else if (colonialNameLength == 46) {
            var first_sayi = 'u';
          } else if (colonialNameLength == 47) {
            var first_sayi = 'v';
          } else if (colonialNameLength == 48) {
            var first_sayi = 'w';
          } else if (colonialNameLength == 49) {
            var first_sayi = 'x';
          } else if (colonialNameLength == 50) {
            var first_sayi = 'y';
          } else if (colonialNameLength == 51) {
            var first_sayi = 'z';
          } else if (colonialNameLength == 52) {
            var first_sayi = '0';
          } else if (colonialNameLength == 53) {
            var first_sayi = '1';
          } else if (colonialNameLength == 54) {
            var first_sayi = '2';
          } else if (colonialNameLength == 55) {
            var first_sayi = '3';
          } else if (colonialNameLength == 56) {
            var first_sayi = '4';
          } else if (colonialNameLength == 57) {
            var first_sayi = '5';
          } else if (colonialNameLength == 58) {
            var first_sayi = '6';
          } else if (colonialNameLength == 59) {
            var first_sayi = '7';
          } else if (colonialNameLength == 60) {
            var first_sayi = '8';
          } else if (colonialNameLength == 61) {
            var first_sayi = '9';
          } else if (colonialNameLength == 64) {
            var first_sayi = 'A';
          } else if (colonialNameLength == 65) {
            var first_sayi = 'B';
          } else if (colonialNameLength == 66) {
            var first_sayi = 'C';
          } else if (colonialNameLength == 67) {
            var first_sayi = 'D';
          } else if (colonialNameLength == 68) {
            var first_sayi = 'E';
          } else if (colonialNameLength == 69) {
            var first_sayi = 'F';
          } else if (colonialNameLength == 70) {
            var first_sayi = 'G';
          } else if (colonialNameLength == 71) {
            var first_sayi = 'H';
          } else if (colonialNameLength == 72) {
            var first_sayi = 'I';
          } else if (colonialNameLength == 73) {
            var first_sayi = 'J';
          } else if (colonialNameLength == 76) {
            var first_sayi = 'M';
          } else if (colonialNameLength == 83) {
            var first_sayi = 'T';
          } else if (colonialNameLength == 89) {
            var first_sayi = 'L';
          }
          var encoded = encodeURI(keyword);
          let buff = new Buffer.from(work.colonial_name);
          let base64data = buff.toString("base64");
          const website_url = "https://www.google.com/search?ie=UTF-8&oe=UTF-8&hl=tr&q=" + encoded + "&num=100&uule=w+CAIQICI" + first_sayi + base64data;
          console.log(work, 'work apwsp')
          console.log(website_url)
          try {
            const response = await axios.get(website_url, { headers: { 'User-Agent': work.device } });
            const $ = cheerio.load(response.data);
            if (device == "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53") {
              var users2 = []
              var inout2 = []
              $('.IhfN8d span.Zu0yb').each((i, el) => {
                var item = $(el).text();
                const regex = website;
                const found = item.match(regex);
                users2.push(item)
                inout2.push(regex)
                console.log(item)

                console.log('döngüye girdi')
              })


            } else if (device == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36") {
              var users = []
              var inout = [];
              $('.NJjxre').each((i, el) => {
                const item = $(el).text();
                var regex = work.website;
                var found = item.match(regex);
                users.push(item)
                inout.push(regex)
                console.log(item)
                console.log('döngüye girdi')
              });
              console.log("socket.emit('newmessage'")
              console.log('buraya geldi')
              break
            }
            // scraberedis.emitToAll('newmessage', {inout});

          } catch (e) {
            console.log(e);
            console.log('hata yakalandı')
          }

        }
      }
      else if (keyword_queue.length > 0) {
        console.log("buraya girdi birader")
        if (keyword_queue.length > 0 || firstKeywordQueue.length > 0) {
          let work
          if (firstKeywordQueue.length > 0) {
            work = firstKeywordQueue.shift();
          } else if(keyword_queue.length > 0 ) {
            work = keyword_queue.shift();
          }
          const colonial_name = work.colonial_name;
          const device2 = work.device;
          const website2 = work.website;
          const keyword2 = work.keyword;
          const language2 = work.language;
          console.log(colonial_name)
          global.colonialNameLength = colonial_name.length;
          if (language2 == 'english') {
            global.len = 'en';
          } else if (language2 == 'arabic') {
            global.len = 'ar';
          } else {
            global.len = 'tr';
          }
          if (colonialNameLength == 4) {
            var first_sayi = 'E';
          } else if (colonialNameLength == 5) {
            var first_sayi = 'F';
          } else if (colonialNameLength == 6) {
            var first_sayi = 'G';
          } else if (colonialNameLength == 7) {
            var first_sayi = 'H';
          } else if (colonialNameLength == 8) {
            var first_sayi = 'I';
          } else if (colonialNameLength == 9) {
            var first_sayi = 'J';
          } else if (colonialNameLength == 10) {
            var first_sayi = 'K';
          } else if (colonialNameLength == 11) {
            var first_sayi = 'L';
          } else if (colonialNameLength == 12) {
            var first_sayi = 'M';
          } else if (colonialNameLength == 13) {
            var first_sayi = 'N';
          } else if (colonialNameLength == 14) {
            var first_sayi = 'O';
          } else if (colonialNameLength == 15) {
            var first_sayi = 'P';
          } else if (colonialNameLength == 16) {
            var first_sayi = 'Q';
          } else if (colonialNameLength == 17) {
            var first_sayi = 'R';
          } else if (colonialNameLength == 18) {
            var first_sayi = 'S';
          } else if (colonialNameLength == 19) {
            var first_sayi = 'T';
          } else if (colonialNameLength == 20) {
            var first_sayi = 'U';
          } else if (colonialNameLength == 21) {
            var first_sayi = 'V';
          } else if (colonialNameLength == 22) {
            var first_sayi = 'W';
          } else if (colonialNameLength == 23) {
            var first_sayi = 'X';
          } else if (colonialNameLength == 24) {
            var first_sayi = 'Y';
          } else if (colonialNameLength == 25) {
            var first_sayi = 'Z';
          } else if (colonialNameLength == 26) {
            var first_sayi = 'a';
          } else if (colonialNameLength == 27) {
            var first_sayi = 'b';
          } else if (colonialNameLength == 28) {
            var first_sayi = 'c';
          } else if (colonialNameLength == 29) {
            var first_sayi = 'd';
          } else if (colonialNameLength == 30) {
            var first_sayi = 'e';
          } else if (colonialNameLength == 31) {
            var first_sayi = 'f';
          } else if (colonialNameLength == 32) {
            var first_sayi = 'g';
          } else if (colonialNameLength == 33) {
            var first_sayi = 'h';
          } else if (colonialNameLength == 34) {
            var first_sayi = 'i';
          } else if (colonialNameLength == 35) {
            var first_sayi = 'j';
          } else if (colonialNameLength == 36) {
            var first_sayi = 'k';
          } else if (colonialNameLength == 37) {
            var first_sayi = 'ı';
          } else if (colonialNameLength == 38) {
            var first_sayi = 'm';
          } else if (colonialNameLength == 39) {
            var first_sayi = 'n';
          } else if (colonialNameLength == 40) {
            var first_sayi = 'o';
          } else if (colonialNameLength == 41) {
            var first_sayi = 'p';
          } else if (colonialNameLength == 42) {
            var first_sayi = 'q';
          } else if (colonialNameLength == 43) {
            var first_sayi = 'r';
          } else if (colonialNameLength == 44) {
            var first_sayi = 's';
          } else if (colonialNameLength == 45) {
            var first_sayi = 't';
          } else if (colonialNameLength == 46) {
            var first_sayi = 'u';
          } else if (colonialNameLength == 47) {
            var first_sayi = 'v';
          } else if (colonialNameLength == 48) {
            var first_sayi = 'w';
          } else if (colonialNameLength == 49) {
            var first_sayi = 'x';
          } else if (colonialNameLength == 50) {
            var first_sayi = 'y';
          } else if (colonialNameLength == 51) {
            var first_sayi = 'z';
          } else if (colonialNameLength == 52) {
            var first_sayi = '0';
          } else if (colonialNameLength == 53) {
            var first_sayi = '1';
          } else if (colonialNameLength == 54) {
            var first_sayi = '2';
          } else if (colonialNameLength == 55) {
            var first_sayi = '3';
          } else if (colonialNameLength == 56) {
            var first_sayi = '4';
          } else if (colonialNameLength == 57) {
            var first_sayi = '5';
          } else if (colonialNameLength == 58) {
            var first_sayi = '6';
          } else if (colonialNameLength == 59) {
            var first_sayi = '7';
          } else if (colonialNameLength == 60) {
            var first_sayi = '8';
          } else if (colonialNameLength == 61) {
            var first_sayi = '9';
          } else if (colonialNameLength == 64) {
            var first_sayi = 'A';
          } else if (colonialNameLength == 65) {
            var first_sayi = 'B';
          } else if (colonialNameLength == 66) {
            var first_sayi = 'C';
          } else if (colonialNameLength == 67) {
            var first_sayi = 'D';
          } else if (colonialNameLength == 68) {
            var first_sayi = 'E';
          } else if (colonialNameLength == 69) {
            var first_sayi = 'F';
          } else if (colonialNameLength == 70) {
            var first_sayi = 'G';
          } else if (colonialNameLength == 71) {
            var first_sayi = 'H';
          } else if (colonialNameLength == 72) {
            var first_sayi = 'I';
          } else if (colonialNameLength == 73) {
            var first_sayi = 'J';
          } else if (colonialNameLength == 76) {
            var first_sayi = 'M';
          } else if (colonialNameLength == 83) {
            var first_sayi = 'T';
          } else if (colonialNameLength == 89) {
            var first_sayi = 'L';
          }
          var encoded = encodeURI(keyword2);
          let buff = new Buffer.from(colonial_name);
          let base64data = buff.toString("base64");
          console.log(base64data);
          console.log(first_sayi);
          console.log(device2,'device2')
          var website_url = "https://www.google.com/search?ie=UTF-8&oe=UTF-8&hl=tr&q=" + encoded + "&num=100&uule=w+CAIQICI" + first_sayi + base64data;
          console.log(website_url);
          console.log('girdi')
          try {
            console.log('içeri girerdi')
            const response = await axios.get(website_url, { headers: { 'User-Agent': device2 } });
            const $ = cheerio.load(response.data);
            console.log(device2,'device23')
            if (device2 == "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53") {
              console.log('içeri girerd2i')
              var users2 = []
              var inout2 = []
              $('.IhfN8d span.Zu0yb').each((i, el) => {
                var item = $(el).text();
                const regex = work.website2;
                var found = item.match(regex);
                users2.push(item)
                inout2.push(regex)
                if(found != null){
                  console.log(found)
                }else{
                  console.log(item)
                }
                console.log(item)
                console.log('döngüye girdi')
              })


            } else if (device2 == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36s") {
              console.log('içeri girerd23i')
              var users = []
              var inout = [];
              $('.NJjxre').each((i, el) => {
                const item = $(el).text();
                var regex = website2;
                var found = item.match(regex);
                users.push(item)
                inout.push(regex)
                if(found != null){
                  console.log(found)
                }else{
                  console.log(item)
                }
                console.log('döngüye girdi')
              });
              console.log("socket.emit('newmessage'")


              break
              // scraberedis.emitToAll('newmessage', {inout});
            }

          } catch (e) {
            console.log(e);
            console.log('hata yakalandı')
          }
        } else if (keyword_queue.length == 1) {
          console.log('buraya giremedi')
        }
      }
    }
}}
// io.on('connection', socket => {
//
//     }
// );




server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}).sockets
module.exports = app;
module.exports = server;