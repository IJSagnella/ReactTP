const express = require('express');
const router = express.Router();

//Controlador
const empleadoController = require("../controllers/empleadoController");

router.post("/register", empleadoController.register);
router.post("/login", empleadoController.login);

module.exports = router;