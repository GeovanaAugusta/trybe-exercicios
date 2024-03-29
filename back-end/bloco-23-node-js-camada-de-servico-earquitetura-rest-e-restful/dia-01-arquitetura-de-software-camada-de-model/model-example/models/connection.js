// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'sua_senha',
	database: 'model_example' });

module.exports = connection;

// Primeiro, importamos o mysql do módulo mysql2/promise, assim utilizamos a versão mais atualizada do mysql2 em vez de usar a versão com callbacks.
// O método createPool cria uma pool de conexões com o banco de dados. Isso significa que a própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco. O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão. Entre as opções possíveis, estão:
// host: local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost;
// user: usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
// password: senha do usuário especificado. Coloque '' se não houver senha para o usuário;
// database: nome do banco com o qual queremos nos conectar;
// O método createPool retorna um objeto Pool representando uma sessão com o banco.
// Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, armazenamos nossa pool na variável connection.