// 引入连接数据库模块
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'blog'
});

module.exports = connection;