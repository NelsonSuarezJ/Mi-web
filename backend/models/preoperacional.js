import mongoose from 'mongoose';
const { Schema } = mongoose;

const preoperacionalSchema = new Schema({
    placa: String,
    luces: { type: String, default: "PE" },
    frenos: { type: String, default: "PE" },
    espejos: { type: String, default: "PE" },
    gato: { type: String, default: "PE" },
    cinturones: { type: String, default: "PE" },
    aceitemotor: { type: String, default: "PE" },
    liquidofrenos: { type: String, default: "PE" },
    creado: { type: Date, default: Date.now },
    idconductor: { type: String, default: "NN" }
}, {
    collection: 'preoperacional'
});

const Preoperacional = mongoose.model('Preoperacioanl', preoperacionalSchema);
export { Preoperacional };