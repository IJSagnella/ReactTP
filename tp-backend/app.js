const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});

//Rutas
app.use(require('./src/routes/eventoRoutes'));
app.use(require('./src/routes/empleadoRoutes'));

//Conexión a la base de datos.
const connection = require('./db');

app.get('/test', (req, res) => {
    res.send('Hola, soy una URL de test');
});

app.get('/test/:nombre', (req, res) => {
    const {nombre} = req.params;
    res.send(`Hola, ${nombre}`);
});

