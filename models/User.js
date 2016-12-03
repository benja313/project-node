var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect("mongodb://localhost/usersTest");

var user_schema   = new Schema({
    email: String,
    password: String
});

var msg_schema   = new Schema({
    mensaje: String,
    user: String,
    edad: Number
});

var User = mongoose.model('User', user_schema);
var Msg = mongoose.model('Msg', msg_schema);
module.exports.User = User;
module.exports.Msg = Msg;

//https://www.npmjs.com/package/mongoose