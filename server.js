const http = require('http');

var server = http.createServer(function (req, res) {
	// console.log('Server init!');

	//req(请求 输入)
	//res(相应 输出)
	res.write('Server init');  
	res.end();				   
})

server.listen(3000);