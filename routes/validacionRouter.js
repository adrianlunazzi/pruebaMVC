const express = require('express');
const router = express.Router();
const validacionController = require('../controllers/validacionController');


router.get('validacion', validacionController.validacion);


module.exports = router;