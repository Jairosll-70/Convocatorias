const convocatoriaModel = require("../model/convocatoria");

const getConvocatorias = async (req, res) => {
    const convocatorias = await convocatoriaModel.find({});
    try {
        console.log("Convocatorias ---->", convocatorias);
        res.status(200).send(convocatorias);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error
        });
    }
}

const getConvocatoria = async (req, res) => {
    const { id } = req.params;
    try {
        const convocatoria = await convocatoriaModel.findById(id);
        res.status(200).json(convocatoria);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

const createConvocatoria = async (req, res) => {
    const convocatoria = new convocatoriaModel(req.body);
    console.log(convocatoria.nombre);
    try {
        await convocatoria.save();
        res.status(200).send({
            message: "Convocatoria creada correctamente"
        });
    } catch (error) {
        res.status(400).send({
            message: error
        });
    }
}

const updateConvocatoria = async (req, res) => {
    try {
        const convocatoria = await convocatoriaModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({
            message: "Convocatoria actualizada correctamente"
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteConvocatoria = async (req, res) => {
    try {
        await convocatoriaModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            message: "Convocatoria eliminada"
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getConvocatorias, getConvocatoria, createConvocatoria, updateConvocatoria, deleteConvocatoria };