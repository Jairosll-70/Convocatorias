const convocatoria = require("../model/convocatoria");

const getConvocatorias = async (req, res) => {
    try {
        const convocatorias = await convocatoria.find({});
        res.status(200).json(convocatorias);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

const getConvocatoria = async (req, res) => {
    const { id } = req.params;
    try {
        const convocatoria = await Convocatoria.findById(id);
        res.status(200).json(convocatoria);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

const createConvocatoria = async (req, res) => {
    const { nombre, fecha_inicio, fecha_fin, acta, estado } = req.body;
    const convocatoria = new convocatoria({nombre, fecha_inicio, fecha_fin, acta, estado});
    try {
        await convocatoria.save();
        res.status(200).json(convocatoria);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

module.exports = { getConvocatorias, getConvocatoria, createConvocatoria };