
var app = angular.module('AppPuja', []);

app.factory('socket', function() {
    var socket = io();
    return socket;
});




//inutil por ahora
app.controller('CtrlPuja', function ($scope, socket) {
  console.log('Entro en CtrlPuja') ;
  
 



  $scope.enviarPuja= function () {
    socket.emit('pujaActual', $scope.puja);
     console.log($scope.puja);
  }
  
   socket.on('actualizarPujas', function(pujaActualizada){
        console.log("Recibí : "+ pujaActualizada );
        $scope.valor=pujaActualizada;
        $scope.$digest();
    });
   
   socket.on('actualizarSubastas', function(subastasActualizada){
        console.log("Recibí : "+ subastasActualizada );
        $scope.subasta=subastasActualizada;
        $scope.$digest();
    });
   
   
      socket.on('find', function(msg){
        console.log("Recibí usuario: "+ msg[0].nombre);
            $scope.usuario=msg[0].nombre;
             $scope.$digest();
  
});
      
      
});



