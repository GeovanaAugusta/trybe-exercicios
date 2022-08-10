const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'sua_senha',
	database: 'users' });

module.exports = connection;