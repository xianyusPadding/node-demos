const express = require("express")
const superagent = require("superagent")
const cheerio = require("cheerio")

let app = express()

app.get('/', function (req, res, next) {
  //用superagent去抓取https://cnodejs.org/的内容
  superagent.get('https://cnodejs.org')
    .end(function (err, sres) {
      //常规的错误处理
      if(err){
        return next(err)  
      }
      //sres.txt存放着网页的html内容，将它传给cheerio.load
      var $ = cheerio.load(sres.text)
      
      var items = []
      $('#topic_list .topic_title').each(function (idx, element){
        var $element = $(element)
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        })
      })

      res.send(items)
    })
})

app.listen(8080, function () {
  console.log('app is listen at port 8080');
})