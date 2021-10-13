import { Preoperacional } from '../models/preoperacional';

class PreoperacionalController {
    static getAll = async (req, res) => {
        try {
            const preoperacional = await Preoperacional.find({});
            res.status(200).json(preoperacional);
        } catch (error) {
            res.status(404).json({ message: err.message });
        }
    }

    static createListaPre = async (req, res) => {
        try {
            const preoperacional = await Preoperacional.create(req.body);
            res.status(200).json(preoperacional);
        } catch (error) {
            res.status(500).json({ message: err.message });
        }
    }

    static deleteListaPre = async (req, res) => {
        try {
            await Preoperacional.findByIdAndRemove(req.params.id);
            res.status(200).json({ message: 'Registro eliminado' })
        } catch (error) {
            res.status(404).json({ message: err.message });
        }
    }

    static editListaPre = async (req, res) => {
        try {
            await Preoperacional.findByIdAndUpdate(req.params.id, req.body);
            res.json({ mensaje: "Se actualizo el registro" })
        } catch (error) {
            res.status(404).json({ message: err.message });
        }
    }
}

export default PreoperacionalController;