var axios = require('axios');
var http = require('http');
var axios = require('axios');
var request = require('request');
var cheerio = require('cheerio');
var cors = require('cors')
var md5 = require("blueimp-md5");

var bodyParser = require('body-parser');
const jsdom = require("jsdom");
var mysql = require('mysql');
let isWorking = false;

const express = require('express')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "findrankapp",
  password: ""
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
ScrabeLoop();
function ScrabeLoop(){
while (true) {
  if (isWorking==false) {
    return scrabe();
    console.log('giremedi2')
    isWorking = true
    console.log('giremedi')
  }
}}

async function scrabe() {
  try {
    const response =  await (axios.get('http://127.0.0.1:8000/api/v1/all-google-search-datas'))
    console.log(response.data.data.length)
    if (response.data.data.length > 0) {
      var datas = response.data.data[0].attributes
      var datas2 = response.data.data
      for (i = 0; i < datas2.length; i++) {
        if (datas2[i].attributes.statusofresult == 1 && datas2[i].attributes.processtime == "Currency") {


            if (datas2[i].attributes.processtime == "Currency") {
            const token  =  datas2[i].attributes.token;
              console.log(datas2[i], 'girer mi')
              const colonial_name = datas2[i].attributes.colonial_name;
              const device = datas2[i].attributes.device;
              const website = datas2[i].attributes.website;
              const keyword = datas2[i].attributes.keyword;
              const language = datas2[i].attributes.language;
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
              let buff = new Buffer.from(colonial_name);
              let base64data = buff.toString("base64");
              const website_url = "https://www.google.com/search?ie=UTF-8&oe=UTF-8&hl=tr&q=" + encoded + "&num=100&uule=w+CAIQICI" + first_sayi + base64data;
              console.log(website_url, 'buraya gelir')
              const response2 = await axios.get(website_url, { headers: { 'User-Agent': device } })
              const $ = cheerio.load(response2.data);
              if (device == "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53") {
                console.log('ulaştımı')
                var users2 = []
                var inout2 = []

                $('.IhfN8d span.Zu0yb').each((i, el) => {
                  var item = $(el).text();
                  const regex = website;
                  const found = item.match(regex);
                  users2.push(item)
                  inout2.push(regex)

                  console.log(item)
                })
                await axios.post('http://localhost:3000', {
                  users2
                })
                console.log('girer')
                await con.query('select * from all_google_search_datas', (err, result, fields) => {
                  console.log('girer2')
                  if (err) {
                    return console.log(err);
                  }
                  for (i = 0; i < result.length; i++) {
                      requestId = result[i].id;
                      console.log('veri değişti3')
                      con.query('UPDATE `all_google_search_datas` SET `statusofresult` = "0" WHERE `all_google_search_datas`.`id` = ' + requestId, (err, result, fields) => {
                        if (err) {
                          return console.log(err);
                        }

                      });
                      console.log('boş mu')
                      isWorking=false;

                  }
                });
                isWorking=false;
                ScrabeLoop();
                await axios.post('http://localhost:3000', {
                  users2, inout2, token
                })
              } else if (device == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36") {
                console.log('ulaştımı3433')
                var users2 = []
                var inout2 = []
                $('.NJjxre').each((i, el) => {
                  var item = $(el).text();
                  const regex = website;
                  const found = item.match(regex);
                  users2.push(item)
                  inout2.push(regex)
                  console.log(item)
                  console.log('testerr343')

                })

               await con.query('select * from all_google_search_datas', (err, result, fields) => {

                  for (i = 0; i < result.length; i++) {
                      requestId = result[i].id;
                      con.query('UPDATE `all_google_search_datas` SET `statusofresult` = "0" WHERE `all_google_search_datas`.`id` = ' + requestId, (err, result, fields) => {
                        if (err) {
                          return console.log(err);
                        }
                      });
                  }
                });
                console.log('döngüye girermi0')
                isWorking=false;
                ScrabeLoop();
                await axios.post('http://localhost:3000', {
                  users2, inout2,token
                })
                console.log('döngüye girermi1')
              }

              console.log('döngüye girermi2')
            }

            console.log('döngüye girermi3')

console.log('isworking32',isWorking)
        }
        // currecny time buraya gelicek
        else if (datas2[i].attributes.statusofresult == 1 && datas2[i].attributes.processtime == "Night") {
          console.log(md5(parseInt(datas2[i].attributes.user_id)));
          let toke = datas2[i].attributes.user_id;
          let buff = new Buffer.from("" + toke);
          const base64data2 = buff.toString("base64");
            if (datas2[i].attributes.processtime == "Night") {
              console.log('gelmiyorsasa')

              console.log(datas2[i], 'girer mi')
              const colonial_name = datas2[i].attributes.colonial_name;
              let device = datas2[i].attributes.device;
              const website = datas2[i].attributes.website;
              const keyword = datas2[i].attributes.keyword;
              const language = datas2[i].attributes.language;
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
              let buff = new Buffer.from(colonial_name);
              let base64data = buff.toString("base64");
              const website_url = "https://www.google.com/search?ie=UTF-8&oe=UTF-8&hl=tr&q=" + encoded + "&num=100&uule=w+CAIQICI" + first_sayi + base64data;
              console.log(website_url, 'buraya gelir')
              if (device == "desktop") {
                device = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36";
              } else {
                device = "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53";
              }
              const response2 = await axios.get(website_url, { headers: { 'User-Agent': device } });
              const $ = cheerio.load(response2.data);
              console.log('geldiMi Buraya')
              if (device == "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53") {
                console.log('ulaştımı')
                var users2 = []
                var inout2 = []
                var found2 = []
                $('.IhfN8d span.Zu0yb').each((i, el) => {
                  var item = $(el).text();
                  const regex = website;
                  const found = item.match(regex);
                  users2.push(item)
                  if(found!=null){
                    found2.push(i);
                    console.log(i)
                  }
                  inout2.push(regex)
                  console.log(item)

                  console.log('giremiyor', 'girer34')
                })
                console.log('giremiyor', 'girer34')
                con.query('select * from all_google_search_datas where processtime="Night" ', (err, result, fields) => {

                  console.log(result, 'girer34')

                  con.query('select * from keywords', (error, result_keyword, fields) => {
                    console.log('tester4')
                    const bos = found2[0]
                    for (i = 0; i < result.length; i++) {
                      if (result[i].statusofresult == 1) {
                        requestId = result[i].keyword_id;
                        console.log('veri değişti', requestId)
                        con.query('UPDATE `keywords` SET `rank` =' + bos + '  WHERE `keywords`.`id` = ' + requestId, (err, resultt, fields) => {
                          if (resultt) {
                            return console.log(resultt, 'hatamı2');
                            isWorking=false;
                          }
                          if (err) {
                            return console.log(err, 'hatamı');
                          }

                        });
                        console.log('boş mu')
                        isWorking=false;
                      } else {
                        console.log('değil mi')
                      }
                    }
                  });
                  if (err) {
                    return console.log(err);
                  }
                  for (i = 0; i < result.length; i++) {
                    if (result[i].statusofresult == 1) {
                      requestId = result[i].id;
                      con.query('UPDATE `all_google_search_datas` SET `statusofresult` = "0" WHERE `all_google_search_datas`.`id` = ' + requestId, (err, result, fields) => {

                        if (err) {
                          return console.log(err);
                        }
                      });

                    } else {
                      console.log('değil mi')

                    }
                  }
                });
              } else if (device == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36") {
                console.log('ulaştımı5233')
                var users2 = []
                var inout2 = []
                var found2 = []
                $('.NJjxre').each((i, el) => {
                  var item = $(el).text();
                  const regex = website;
                  const found = item.match(regex);
                  console.log(found,'sadas')
                  if (found != null) {
                    found2.push(i);
                    console.log(i)
                  }
                  else{
                    console.log(item)
                  }
                  users2.push(item)
                  inout2.push(regex)
                })
                console.log('tester3')
                if (found2.length > 0) {
                  await con.query('select * from all_google_search_datas where processtime="Night"', (err, result, fields) => {
                    console.log('tester4')
                    con.query('select * from keywords', (error, result_keyword, fields) => {
                      console.log('tester4')
                      const bos = found2[0];
                      console.log(bos,'bos')
                      for (i = 0; i < result.length; i++) {
                        if (result[i].statusofresult == 1) {
                         const requestId = result[i].keyword_id;
                          const   userId = result[i].user_id;
                          console.log('veri değişti', requestId)
                          con.query(`INSERT INTO keyword_requests(rank,keyword_id,user_id) VALUES(?, ?, ?)`,[bos, requestId, userId], (err, resultt, fields) => {
                            if (resultt) {
                              return console.log(resultt, 'hatamı2');
                              isWorking=false;
                            }
                            if (err) {
                              return console.log(err, 'hatamı');
                            }

                          });
                          console.log('boş mu')
                          isWorking=false;
                        } else {
                          console.log('değil mi')
                        }
                      }
                    });
                    if (err) {
                      return console.log(err);
                    }
                    for (i = 0; i < result.length; i++) {
                      if (result[i].statusofresult == 1) {
                        requestId = result[i].id;
                        console.log('veri değişti4')
                        con.query('UPDATE `all_google_search_datas` SET `statusofresult` = "0" WHERE `all_google_search_datas`.`id` = ' + requestId, (err, result, fields) => {
                          if (err) {
                            return console.log(err);
                          }

                        });
                        console.log('boş mu')
                        isWorking=false;
                      } else {
                        console.log('değil mi')

                      }
                    }
                  });

                }
              else{
                  await con.query('select * from all_google_search_datas', (err, result, fields) => {
                    console.log('tester4')
                    con.query('select * from keywords', (error, result_keyword, fields) => {
                      console.log('tester4')
                      for (i = 0; i < result.length; i++) {
                        if (result[i].statusofresult == 1) {
                          requestId = result[i].keyword_id;
                          console.log('veri değişti', requestId)
                          con.query('UPDATE `keywords` SET `rank` =' + 0 + '  WHERE `keywords`.`id` = ' + requestId, (err, resultt, fields) => {
                            if (resultt) {
                              return console.log(resultt, 'hatamı2');
                              isWorking=false;
                            }
                            if (err) {
                              return console.log(err, 'hatamı');
                            }

                          });
                          console.log('boş mu')
                          isWorking=false;
                        } else {
                          console.log('değil mi')
                        }
                      }
                    });
                    if (err) {
                      return console.log(err);
                    }
                    for (i = 0; i < result.length; i++) {
                      if (result[i].statusofresult == 1) {
                        requestId = result[i].id;
                        console.log('veri değişti4')
                        con.query('UPDATE `all_google_search_datas` SET `statusofresult` = "0" WHERE `all_google_search_datas`.`id` = ' + requestId, (err, result, fields) => {
                          if (err) {
                            return console.log(err);
                          }

                        });
                        console.log('boş mu')
                        isWorking=false;
                      } else {
                        console.log('değil mi')

                      }
                    }
                  });

                }
              }
            }

        }
      }
    }
  } catch (e) {
    console.error(e)
    console.log('ip değiş')
  }
  console.log('barış')
  isWorking=false;
  ScrabeLoop();

}

/*
 */


