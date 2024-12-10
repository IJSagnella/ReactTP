const express = require('express');
const router = express.Router();


//Controlador
const sucursalController = require('../controllers/sucursalController');

router.get('/contactos', sucursalController.public);
router.get('/sucursales', sucursalController.index);
router.post('/sucursales', sucursalController.store);
router.get('/sucursales/:ID', sucursalController.show); 
router.put('/sucursales/:ID', sucursalController.update);


module.exports = router;