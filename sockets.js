

module.exports = function(app, io, postorModel){
	

	var usuarios = {};
	
	 var subastas = {};
	 
	io.sockets.on('connection', function(socket) {
		
		console.log('a user connected');
		
			//emitimos un evento llamado 'event-example' que lleva consigo el String 'Hola eso es....'
		socket.on('insert', function (response) {
			
			var bson_pers= new postorModel(response);
			bson_pers.save( function () {
				console.log('Postor Guardado exitosamente');
			

			});
		});
		
		
		
			
		postorModel.find( {nombre:"usuarioUltimoIngreso"}, function (err, docs) {
					io.emit('find', docs);
					console.log();
			});
		
		
			
		
		
		socket.on('pujaActual', function (response) {
			
			io.emit('actualizarPujas', response);
		});
		
		
		
		
		
		//conexion a sala
		 io.sockets.on('connection', function (socket) {
     
        // when the client emits 'adduser', this listens and executes
        socket.on('addsubasta', function(subasta){
            // store the username in the socket session for this client
            socket.subasta = subasta;
            // store the room name in the socket session for this client
            socket.room = 'room1';
            // add the client's username to the global list
            subastas[subasta] = subasta;
			
			io.emit('actualizarSubastas', response);
            // send client to room 1
			/*
            socket.join('room1');
            // echo to client they've connected
            socket.emit('updatechat', 'SERVER', 'you have connected to room1');
            // echo to room 1 that a person has connected to their room
            socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
            socket.emit('updaterooms', rooms, 'room1');
            
            */
        });
		
		
			//cambiar subasta		
		   socket.on('switchSubasta', function(newsubasta){
            // leave the current room (stored in session)
            socket.leave(socke.subasta);
            // join new room, received as function parameter
            socket.join(newsubasta);
            socket.emit('updatesubasta', 'SERVER', 'you have connected to '+ newsubasta);
            // sent message to OLD room
            socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
            // update socket session room title
            socket.room = newroom;
            socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
            socket.emit('updaterooms', rooms, newroom);
        });
		
		
			//mensaje a todos
			//console.log("Emití: "+msg);
			//io.emit('chat-message', msg);
			
			//mensaje solo a mi
			//socket.emit('chat-message', msg);
			
			//mensaje a todos menos a mi
			//socket.broadcast.emit('chat-message', msg);
		
		
		socket.on('disconnect', function() {
		  console.log('user disconnected socket');
		});
	});
});
};

