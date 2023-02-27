/** Handles all pooled connections to MySQL database */
const util = require('util')
const mysql = require('mysql2')

require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "192.34.62.10", //process.env.SHAFTHOST,
  user: "columbiaspectatordev", //process.env.SHAFTUSER,
  password: "Columbiaspectatorspectech1877!", //process.env.SHAFTPASSWORD,
  database: "dev" //process.env.SHAFTDATABASE
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused lmao.')
    }
  }

  if (connection) connection.release()

  return;
});

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;