const async = require('async')

//并发连接数的计数器
let concurrencyCount = 0

const fetchUrl = function(url, callback) {
  //deply的值在2000之内，是个随机数
  let deply = parseInt((Math.random() * 2000) % 2000, 10)
  concurrencyCount++
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + deply + '毫秒')
  setTimeout(function() {
    concurrencyCount--
    callback(null, url + ' html content')
  }, deply)
}

//接着来伪造一组链接
let urls = []
for(let i = 0; i < 30; i++){
  urls.push('htpps://datasource_' + i)
}
// console.log(urls)

//使用async.mapLimit来并发抓取，兵获取结果
async.mapLimit(urls, 5, function(url, callback) {
  fetchUrl(url, callback)
}, function(err, result) {
  console.log('final:')
  console.log(result)
})