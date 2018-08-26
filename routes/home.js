const express = require('express');
// 引入数据库连接文件 返回连接对象
const connection = require('../model/db.js');
// 引用加密的第三方模块
const md5 = require('md5');

// 创建前端的一级路由
const home = express.Router();

// 当客户端以get方式请求/的时候
home.get('/index' , (req, res) => {
	// 向客户端做出响应
	res.render('home/index');
});

// 关于我们
home.get('/about', (req, res) => {
	res.render('home/about');
});

// 招聘页面
home.get('/join', (req, res) => {
	res.render('home/join');
});

// 注册页面
home.get('/register', (req, res) => {
	res.render('home/register');
});

// 登录页面
home.get('/login', (req, res) => {
	res.render('home/login');
});

// 处理注册业务逻辑
home.post('/register', (req, res) => {
	// 接收前端传递过来的注册信息
	let {name, pass, email} = req.body;
	// 对信息进行验证
	if (name.trim().length == 0) {
		res.send({error: 100, message: '请填写用户名'});
		return;
	}

	// 查询用户名是否已经被注册
	let sql1 = 'select * from users where name = ?';
	// 发送查询请求
	connection.query(sql1, [name], (err, rows) => {
		// 如果rows数组的长度为0 说明没查到数据 说明没有注册过
		if (rows.length == 0) {
			// 没有注册过
			// 将注册信息添加到数据库
			let sql2 = 'insert into users set ?';

			// 对密码进行加密处理
			req.body.pass = md5(pass);

			// 发送sql请求
			connection.query(sql2, req.body, err => {
				if (err == null) {
					res.send({success: true, message: '注册成功'})
				}else {
					res.send({error: 400, message: '注册失败'});
				}
			});

		} else {
			// 注册过
			res.send({error: 300, message: '用户名已经被注册'});
		}
	});

});















// 将前端主路由开放出去
module.exports = home;