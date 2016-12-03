var app = angular.module('AppSubastas', []);

app.factory('socket', function() {
    var socket = io();
    return socket;
});

app.controller('InsertCtrl', function ($scope, socket){
  console.log('Entro en InsertCtrl');
  $scope.agregarSubasta= function () {
    console.log('Agregar Postor');
        var subasta = {
          nombreS: $scope.nombre,
          deripcionS: $scope.descripcion,
          emailS:$scope.email,
          imagenS: $scope.imagen,
          valorS: $scope.valor
        };
    
        socket.emit('insert', subasta);
        
        $scope.nombre='';
        $scope.rut='';
        $scope.imagen='';
        $scope.email='';
        $scope.valor='';
        //$window.location.href('/puja');
    

    };
    
    socket.on('find', function(msg){
        console.log("Recibí : "+ msg[0].rut);
        
    });
});
