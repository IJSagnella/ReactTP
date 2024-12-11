const express = require('express');
const router = express.Router();

//Controlador
const empleadoController = require("../controllers/empleadoController");

router.post("/register", empleadoController.register);
router.post("/login", empleadoController.login);
router.get('/empleados', empleadoController.index);

module.exports = router;