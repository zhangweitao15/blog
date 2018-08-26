// 引入express框架
const express = require('express');
// 引用express-handlebars模板引擎
const exphbs = require('express-handlebars');
// 引入path模块 用来处理路径
const path = require('path');
// 引入处理post参数模块
const bodyParser = require('body-parser');

// 创建web服务器
const app = express();

// 告诉bodyParse模块为我处理application/x-www-form-urlencode类型的参数
// name=zhangsan&age=20 => {name:'zhangsan',age:20}
app.use(bodyParser.urlencoded({ extended: false }));

// 开放静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 告诉express项目所使用的模板引擎是哪个
// 配置模板引擎
app.engine('handlebars', exphbs({
	// 配置了公共部分的路径
	partialsDir: [{
		dir: path.join(__dirname, 'views', 'home', 'partials'),
		namespace: 'home'
	},{
		dir: path.join(__dirname, 'views', 'admin', 'partials'),
		namespace: 'admin'
	}],
	// 模板架构所在目录
	layoutsDir: path.join(__dirname, 'views', 'layouts'),
	// 渲染模板时默认使用的模板架构
	defaultLayout: 'home'
}));

// 指定模板的目录
app.set('views', path.join(__dirname, 'views'));

// 指定模板后缀
app.set('view engine', 'handlebars');

// 导入前端路由模块 返回前端路由一级模块对象
const home = require('./routes/home.js');
const admin = require('./routes/admin.js');

// 当有请求来的时候 如果请求以/home开头 走前端路由
app.use('/home', home);

// 当有请求来的时候 如果请求以/admin 走后端路由
app.use('/admin', admin);

// 让服务器监听3000端口向外界提供服务
app.listen(3000, err => {
	if (err == null) {
		console.log('服务器启动成功,请访问http://localhost:3000');
	}
});