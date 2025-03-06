const express = require('express');
const router = express.Router();


//Controlador
const ordenController = require('../controllers/ordenController');

router.post('/ordenes', ordenController.store);
router.get('/ordenes', ordenController.index);
router.get('/ordenes/:ID', ordenController.show); 
router.put('/ordenes/:ID', ordenController.update);
router.get('/ordenes/search/:dni', ordenController.search);


module.exports = router;