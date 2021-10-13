import express from "express";
import PreoperacionalController from "../controllers/listaPreoperacionalController";

const preoperacionalRouter = express.Router();

preoperacionalRouter.get('/preoperacional', PreoperacionalController.getAll);
preoperacionalRouter.post('/preoperacional', PreoperacionalController.createListaPre);
preoperacionalRouter.delete('/preoperacional/:id', PreoperacionalController.deleteListaPre);
preoperacionalRouter.put('/preoperacional/:id', PreoperacionalController.editListaPre);

export { preoperacionalRouter };