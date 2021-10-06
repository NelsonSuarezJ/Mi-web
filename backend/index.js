import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto: ${app.get('port')}`)
})
