const express = require('express');

const convocatoriaController = require('../controller/convocatoria');

const app = express();

app.get('/', convocatoriaController.getConvocatorias);
app.get('/:id', convocatoriaController.getConvocatoria);
app.post('/', convocatoriaController.createConvocatoria);
app.put('/:id', convocatoriaController.updateConvocatoria);
app.delete('/:id', convocatoriaController.deleteConvocatoria);

module.exports = app;