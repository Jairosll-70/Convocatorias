const mongoose = require('mongoose');

const convocatoriaSchema = new mongoose.Schema({
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

const Convocatorias = mongoose.model('convocatorias', convocatoriaSchema);
module.exports = Convocatorias;