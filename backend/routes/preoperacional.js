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

preoperacionalRouter.delete("/delete-pre/:id", async (req, res) => {
    const preoperacional = await Preoperacional.findByIdAndRemove(req.params.id);
    res.json(preoperacional)
})


export { preoperacionalRouter };