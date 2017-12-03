const express = require("express")
const superagent = require("superagent")
const cheerio = require("cheerio")
const eventproxy = require("eventproxy")
const url = require("url")

let app = express()

let cnodeUrl = 'https://cnodejs.org/'

app.get('/', function (req, res, next) {
  superagent.get(cnodeUrl)
    .end(function (err, res) {
      if (err) {
        return next(err)
      }
      let topicUrls = []
      let $ = cheerio.load(res.text)
      //获取首页所有的链接
      $('#topic_list .topic_title').each(function (idx, element) {
        let $element = $(element)
        let href = url.resolve(cnodeUrl, $element.attr('href'))

        topicUrls.push(href)
      })

      
      //得到一个 eventproxy实例
      let ep = new eventproxy()

      //命令ep重复监听topicUrls.length次 topic_html事件再行动
      ep.after('topic_html', topicUrls.length, function (topics) {
        //topic是个数组，包含了40次ep.emit('topic_html', pair)中的那40个pair

        //开始行动
        topics = topics.map(function (topicPair) {
          let topicUrl = topicPair[0]
          let topicHtml = topicPair[1]
          let $ = cheerio.load(topicHtml)

          return ({
            title: $('.topic_full_title').text().trim(),
            href: topicUrl,
            comment1: $('.reply_content').eq(0).text().trim()
          })
        })

        console.log('final:')
        console.log(topics)
      })

      topicUrls.forEach(function (topicUrl) {
        superagent.get(topicUrl)
          .end(function (err, res) {
            console.log('fetch ' + topicUrl + ' successful')
            ep.emit('topic_html', [topicUrl, res.text])
          })
      })
    })
})




app.listen(8080, function () {
  console.log('app is listen at port 8080')
})
