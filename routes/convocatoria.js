const express = require('express');

const convocatoriaController = require('../controller/convocatoria');

const router = express.Router();

router.get('/', convocatoriaController.getConvocatorias);
router.get('/:id', convocatoriaController.getConvocatoria);
router.post('/', convocatoriaController.createConvocatoria);

module.exports=router;