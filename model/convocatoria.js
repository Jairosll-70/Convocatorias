const mongoose = require('mongoose');

const convocatoriaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    fecha_fin: {
        type: Date,
        required: true
    },
    acta: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
});

var convocatoria = mongoose.model('convocatoria', convocatoriaSchema);
module.exports = convocatoria;