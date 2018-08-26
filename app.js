// 引入 express框架
const express = require('express');
// 创建web服务器
const app = express();
// 当浏览器发送请求的时候








// 让服务器监听3000端口 
app.listen(3000, err => {
    if (!err) {
        console.log('连接成功， 监听3000端口');
    } else {
        console.log('链接失败', err);
    }
})