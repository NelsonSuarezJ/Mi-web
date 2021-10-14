import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { usuarioRouter } from "./routes/usuarios.js";
import { preoperacionalRouter } from "./routes/preoperacional.js";
import { vehiculoRouter } from "./routes/vehiculo.js";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//config
dotenv.config();
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))  //para poder usar postman
app.use(cors());

//rutas
app.use('/api', [usuarioRouter, preoperacionalRouter, vehiculoRouter]);

//configuracion produccion
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "public")));
    app.use("*", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"))
    });
}

//conexion a BD
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lsrlm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(uri).then(() => {
        console.log("Conexion exitosa a Mongo")
    });
}

//escucha
//const port = process.env.PORT || '4000';
app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), () => {
    console.log(`Escuchando en el puerto: ${app.get('PORT')}`)
});