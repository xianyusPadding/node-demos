const express = require('express');
const multer = require('multer');
const pathLib = require('path');
const fs = require('fs');

var objMulter = multer({
    dest: './www/upload/'
});

var server = express();

server.use(objMulter.any());

server.post('/', function(req, res){
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    })
    // console.log(req.files);
})

server.listen(4000);