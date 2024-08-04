const express = require('express');
const router = express.Router();

//Controlador
const empleadoController = require("../controllers/empleadoController");

router.post("/register", empleadoController.register);

module.exports = router;