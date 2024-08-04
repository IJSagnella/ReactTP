const mysql = require('mysql2/promise');


// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teleservice_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = pool;