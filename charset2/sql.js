const mysql = require('mysql');

//1.连接
//createConnection(服务器名，用户名，密码，数据库)
var db = mysql.createConnection({host: 'localhost', user: 'root', password: 'long1019', database: 'testDB'});

//2.查询
//query(sql语句， callback)

//4大查询语句

//增-INSERT
//INSERT INTO 表名 (字段列表) VALUE (值列表)
//INSERT INTO user_table (ID. username, password) VALUE(0, 'blue', '147');
//删
//改
//查
//SELECT * FROM 表名
db.query("SELECT * FROM user_table;", (err, data) => {
    if(err)
        console.log('error:', err);
    else
        // console.log('success:',data);   //数组格式的data
        console.log('success:',JSON.stringify(data)); //JSON格式的data
});