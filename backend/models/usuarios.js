import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    rol: String,
    password: String,
    cedula: Number
}, {
    collection: 'usuarios'
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export { Usuario };