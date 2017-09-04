## node-demos
#### charser1-文件上传
> 依赖express，path，fs，multer，这里主要是关于multer的使用
```html
<form action="http://localhost:4000" method="post" enctype="multipart/form-data">
    文件：<input type="file" name="f1"><br>
    <input type="submit" value="上传">
</form>
```
```javascript
var objMulter = multer({
    //指定upload的目录
    dest: './www/upload/'
});

var server = express();

server.use(objMulter.any());

server.post('/', function(req, res){
    //因为原始的multer处理的文件是不带扩展名的，是一串数字和字母，打开是一段乱码，所以我们要使用fs.rename给文件加上扩展名，就可以清楚的知道文件内容
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    })
    // console.log(req.files[0]);
})
```
