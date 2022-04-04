const mysql = require('mysql-await');
require('dotenv').config();

const datosBD = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
const connection = mysql.createConnection(datosBD);
module.exports = connection;
