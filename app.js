var port 				= process.env.PORT || 8000,
	express 			= require('express'),
	app 				= express(),
	io					= require('socket.io').
								listen(
									app.listen(port, function(){
										console.log('listening on *:8000');
									})
								);

var postorModel 				= require('./models/PostorModel').postorsch;
var subastaModel 				= require('./models/PostorModel').subastasch;

require('./config')(app);
require('./routes')(app);
require('./sockets')(app, io, postorModel, subastaModel);
