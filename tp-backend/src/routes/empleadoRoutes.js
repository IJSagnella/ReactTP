const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

//Controlador
const empleadoController = require("../controllers/empleadoController");

router.post("/register", auth.authToken, empleadoController.register);
router.post("/login", empleadoController.login);
router.post("/validate", auth.authToken, empleadoController.validate);
router.get('/empleados', auth.authToken, empleadoController.index);

module.exports = router;