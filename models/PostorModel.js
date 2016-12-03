var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/postores');

var postor_schema   = new Schema(
  {
      nombre: String,
      rut: String,
      email: String,
     // puja: Number
  }
);

var subasta_schema   = new Schema(
  {
      nombreS: String,
      rutS: String,
      emailS: String,
      imagenS: String,
      valorS: Number
  }
);
var subastasch = mongoose.model('subastasch', subasta_schema);
module.exports.subastasch = subastasch;



//creamos schema para exportar y llamar en otros componentes
var postorsch = mongoose.model('postorsch', postor_schema);
module.exports.postorsch = postorsch;
/*

var subasta_schema   = new Schema(
  {
      nombreS: String,
      rutS: String,
      emailS: String,
      imagenS: String,
      valorS: Number
  }
);

//creamos schema para exportar y llamar en otros componentes
var subastasch = mongoose.model('subastasch', subasta_schema);
module.exports.subastasch = subastasch;
//https://www.npmjs.com/package/mongoose

*/