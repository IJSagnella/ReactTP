const mysql = require('mysql2/promise');


// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: process.env.DATA_BASE_HOST,
  user: process.env.DATA_BASE_USER,
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = pool;