import { Vehiculo } from "../models/vehiculos";

class VehiculoController {
    static getAll = async (req, res) => {
        try {
            const vehiculo = await Vehiculo.find({});
            res.status(200).json(vehiculo);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static CreateVehiculo = async (req, res) => {
        try {
            const vehiculo = await Vehiculo.create(req.body);
            res.status(200).json(vehiculo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static deleteVehiculo = async (req, res) => {
        try {
            await Vehiculo.findByIdAndRemove(req.params.id);
            res.status(200).json({ message: 'Vehiculo eliminado' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static editVehiculo = async (req, res) => {
        try {
            await Vehiculo.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: 'Se actualiza vehiculo' })
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export default VehiculoController;