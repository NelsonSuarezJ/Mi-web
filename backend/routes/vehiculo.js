import express from "express";
import VehiculoController from "../controllers/vehiculoController";

const vehiculoRouter = express.Router();

vehiculoRouter.get('/vehiculo', VehiculoController.getAll);
vehiculoRouter.post('/vehiculo', VehiculoController.CreateVehiculo);
vehiculoRouter.delete('/vehiculo/:id', VehiculoController.deleteVehiculo);
vehiculoRouter.put('/vehiculo/:id', VehiculoController.editVehiculo);

export { vehiculoRouter };