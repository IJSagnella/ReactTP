const express = require('express');
const router = express.Router();


//Controlador
const eventoController = require('../controllers/sucursalController');


router.get('/sucursales', eventoController.index);
router.post('/sucursales', eventoController.store);
router.get('/sucursales/:ID', eventoController.show);
router.put('/sucursales/:ID', eventoController.update);


module.exports = router;