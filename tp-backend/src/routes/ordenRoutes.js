const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


//Controlador
const ordenController = require('../controllers/ordenController');

router.post('/ordenes', auth.authToken, ordenController.store);
router.get('/ordenes', auth.authToken, ordenController.index);
router.get('/ordenes/:ID', auth.authToken, ordenController.show); 
router.put('/ordenes/:ID', auth.authToken, ordenController.update);
router.put('/ordenes/:ID/estado', auth.authToken, ordenController.state);
router.get('/ordenes/search/:dni', ordenController.search);


module.exports = router;