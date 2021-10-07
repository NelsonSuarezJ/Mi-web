import express from "express";
import { Usuario } from "../models/usuarios.js";

const usuarioRouter = express.Router();

usuarioRouter.get('/', async (req, res) => {
    const usuarios = await Usuario.find({});
    res.json(usuarios)
})

usuarioRouter.post("/", async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.json(usuario)
})


export { usuarioRouter };