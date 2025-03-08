const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Controlador
const empleadoController = require("../controllers/empleadoController");

router.post("/register", auth.authToken, empleadoController.register);
router.post("/login", empleadoController.login);
router.get('/empleados', empleadoController.index);

module.exports = router;