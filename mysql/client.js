const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: 'root',
  password: '',
  database: 'mysql'
});

mysqlConnection.connect();

mysqlConnection.query('SELECT NOW()', (err, res) => {
  if (err) throw err
  console.log(res)
  mysqlConnection.end()
});
