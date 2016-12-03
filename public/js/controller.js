//Inicializo la variable de mi aplicación.
var app = angular.module("app", []);

//Uso el servicio factory para acceder a socket io y dejarlo como servicio.
app.factory('socket', function() {
    var socket = io();
    
    return socket;
});

app.controller("appChat", function ($scope, socket){
    $scope.apellido = "Gutiérrez";
    $scope.user_name = "Luis";
    $scope.mensajes = [];
    
    $scope.enviarMensaje = function(){
        socket.emit('chat-message', $scope.message);
        console.log("Envié: "+ $scope.message);
        $scope.message = "";
    };
    
    socket.on('chat-message', function(msg){
        console.log("Recibí : "+ msg);
        $scope.mensajes.push(msg);
        $scope.$digest();
    });
    
    socket.on('chat-msgs', function(msgs){
        for(i in msgs){
            console.log("mensaje: "+msgs[i]);
            $scope.mensajes.push(msgs[i].mensaje);
        }
        $scope.$digest();
    });
    
});