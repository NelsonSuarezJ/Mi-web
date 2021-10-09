import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { usuarioRouter } from "./routes/usuarios.js";
import { preoperacionalRouter } from "./routes/preoperacional.js";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//config
dotenv.config();
const app = express();
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))  //para poder usar postman
app.use(cors());

//escucha
app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto: ${app.get('port')}`)
});

//rutas
app.use('/api', [usuarioRouter, preoperacionalRouter]);
app.use(express.static(path.join(__dirname, "../public")));


//conexion a BD
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lsrlm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(uri).then(() => {
        console.log("Conexion exitosa a Mongo")
    });
}
