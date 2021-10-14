import mongoose from 'mongoose';
const { Schema } = mongoose;

const vehiculoSchema = new Schema({
    placa: String,
    kilometraje: Number,
    tarjeta: String,
    tecnoMecanica: String,
    soat: String
}, {
    collection: 'vehiculos'
})

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
export { Vehiculo };