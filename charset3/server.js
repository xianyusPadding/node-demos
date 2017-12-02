const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');

var server = express();
server.listen(4000);

//1.解析cookie
server.use(cookieParser('asd13as21321sa321d'));

//2.使用session
var arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push('keys_' + Math.random());
}
server.use(cookieSession({
  name: 'zns_sess_id',
  keys: arr,
  maxAge: 20 * 3600 * 1000
}))

//3.post数据
server.use(bodyParser.urlencoded({extended: false}))
server.use(multer({dist: './www/upload'}).any())

//4.配置模板引擎
//输出什么东西
server.set('view engine', 'html')
//模板文件放在那里
server.set('view', './view')
//那种模板引擎
server.engine('html', consolidate.ejs)