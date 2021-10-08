import express from "express";
import { Preoperacional } from "../models/preoperacional.js";

const preoperacionalRouter = express.Router();

preoperacionalRouter.get('/preoperacional', async (req, res) => {
    const preoperacional = await Preoperacional.find({});
    res.json(preoperacional)
})

preoperacionalRouter.post("/preoperacional", async (req, res) => {
    const preoperacional = await Preoperacional.create(req.body);
    console.log(preoperacional);
    res.json({ respuesta: "Datos ingresados" })
})

preoperacionalRouter.delete("/delete-pre/:id", async (req, res) => {
    const preoperacional = await Preoperacional.findByIdAndRemove(req.params.id);
    res.json(preoperacional)
})

preoperacionalRouter.put("/update-pre/:id", async (req, res) => {
    try {
        const preoperacional = await Preoperacional.findByIdAndUpdate(req.params.id, req.body);
        res.json(preoperacional)
    } catch (error) {
        res.sendStatus(404)
    }
})


export { preoperacionalRouter };