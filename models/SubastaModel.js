var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/subastas');

var subasta_schema   = new Schema(
  {
      nombre: String,
      rut: String,
      email: String,
      imagen: String,
      valor: Number
  }
);

//creamos schema para exportar y llamar en otros componentes
var subastasch = mongoose.model('subastasch', subasta_schema);
module.exports.subastasch = subastasch;

//https://www.npmjs.com/package/mongoose