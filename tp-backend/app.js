const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

const cors = require('cors');
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});

//Rutas
app.use(require('./src/routes/eventoRoutes'));
app.use(require('./src/routes/empleadoRoutes'));
app.use(require('./src/routes/sucursalRoutes'));
app.use(require('./src/routes/ordenRoutes'));

//Conexión a la base de datos.
const connection = require('./db');

app.get('/test', (req, res) => {
    res.send('Hola, soy una URL de test');
});

app.get('/test/:nombre', (req, res) => {
    const {nombre} = req.params;
    res.send(`Hola, ${nombre}`);
});

