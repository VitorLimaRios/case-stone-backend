const mysql = require('mysql2/promise');
// require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'vitor',
  password: 'Vitor22021999*',
  database: 'case_stone',
});

module.exports = connection;
