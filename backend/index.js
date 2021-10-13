"use strict";

require("core-js/modules/es.promise.js");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _usuarios = require("./routes/usuarios.js");

var _preoperacional = require("./routes/preoperacional.js");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//config
_dotenv.default.config();

const app = (0, _express.default)(); //middlewares

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); //para poder usar postman

app.use((0, _cors.default)()); //rutas

app.use('/api', [_usuarios.usuarioRouter, _preoperacional.preoperacionalRouter]); //configuracion produccion

if (process.env.NODE_ENV === "production") {
  app.use(_express.default.static(_path.default.join(__dirname, "public")));
  app.use("*", (req, res) => {
    res.sendFile(_path.default.join(__dirname, "/public/index.html"));
  });
} //conexion a BD


const uri = "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASS, "@cluster0.lsrlm.mongodb.net/").concat(process.env.DB_NAME, "?retryWrites=true&w=majority");
main().catch(err => console.log(err));

async function main() {
  await _mongoose.default.connect(uri).then(() => {
    console.log("Conexion exitosa a Mongo");
  });
} //escucha
//const port = process.env.PORT || '4000';


app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), () => {
  console.log("Escuchando en el puerto: ".concat(app.get('PORT')));
});
