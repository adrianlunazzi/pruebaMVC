const express = require('express');
const router = express.Router();
const logicaController = require('../controllers/logicaController');


router.get('logica', logicaController.logica);


module.exports = router;