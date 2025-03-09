const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


//Controlador
const sucursalController = require('../controllers/sucursalController');

router.get('/contactos', sucursalController.public);
router.get('/sucursales', auth.authToken, sucursalController.index);
router.post('/sucursales', auth.authToken, sucursalController.store);
router.get('/sucursales/:ID', auth.authToken, sucursalController.show); 
router.put('/sucursales/:ID', auth.authToken, sucursalController.update);


module.exports = router;