import express from "express";
import { Preoperacional } from "../models/preoperacional.js";

const preoperacionalRouter = express.Router();

preoperacionalRouter.get('/preoperacional', async (req, res) => {
    const preoperacional = await Preoperacional.find({});
    res.json(preoperacional)
})

preoperacionalRouter.post("/preoperacional", async (req, res) => {
    const preoperacional = await Preoperacional.create(req.body);
    res.json(preoperacional)
})

preoperacionalRouter.delete("/preoperacional/:id", async (req, res) => {
    const preoperacional = await Preoperacional.findByIdAndRemove(req.params.id);
    res.json(preoperacional)
})

preoperacionalRouter.put("/preoperacional/:id", async (req, res) => {
    const preoperacional = await Preoperacional.findByIdAndUpdate(req.params.id, req.body)
    res.json({ mensaje: "Se actualizo el registro" }) //esto se ve en postman
})

export { preoperacionalRouter };