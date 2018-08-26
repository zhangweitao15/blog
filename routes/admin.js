const express = require('express');
// 创建后端一级路由
const admin = express.Router();

// 首页
admin.get('/index', (req, res) => {
	res.render('admin/index', {
		layout: 'admin'
	});
});

// 添加文章页面
admin.get('/add', (req, res) => {
	res.render('admin/add', {
		layout: 'admin'
	});
});

// 文章列表页面
admin.get('/list', (req, res) => {
	res.render('admin/list', {
		layout: 'admin'
	});
});

// 个人信息修改页面
admin.get('/settings', (req, res) => {
	res.render('admin/settings', {
		layout: 'admin'
	});
})

// 将后端路由一级对象开放出去
module.exports = admin;