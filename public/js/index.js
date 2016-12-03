
var app = angular.module('AppFormulario', []);

app.factory('socket', function() {
    var socket = io();
    return socket;
});

app.controller('InsertCtrl', function ($scope, socket){
  console.log('Entro en InsertCtrl');
  $scope.agregarPostor= function () {
    console.log('Agregar Postor');
        var postor = {
          nombre: $scope.nombre,
          rut: $scope.rut,
          email: $scope.email,
         // puja: $scope.puja
        };
    
        socket.emit('insert', postor);
        
        $scope.nombre='';
        $scope.rut='';
        $scope.email='';
        //$scope.puja='';
        //$window.location.href('/puja');
    

    };
 
  
});


