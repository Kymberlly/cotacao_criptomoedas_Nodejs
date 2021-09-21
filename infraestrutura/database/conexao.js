const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'admin',
    database: 'Criptomoedas',
    port: 3306
});

module.exports = conexao;
