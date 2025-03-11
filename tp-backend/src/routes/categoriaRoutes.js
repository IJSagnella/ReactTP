const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


//Controlador
const categoriaController = require('../controllers/categoriaController');


router.get('/categorias', auth.authToken, categoriaController.index);



module.exports = router;