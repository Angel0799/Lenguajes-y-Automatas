var net = require('net');
var server = net.createServer();
var sockets = [];
var string;

server.on('connection', function(socket){
    console.log('nueva conexion');

    sockets.push(socket);

    socket.on('dat',function(data){
        console.log('got data:', data);
        sockets.forEach(function(otherSocket){

            if (otherSocket !== socket){
                otherSocket.write(data);
            }
        });
    });
    socket.on('close', function(){
        console.log('conexion cerrada');
        var index = sockets.indexOf(socket);
        socket.splice(index, 1);
    })
});//fin de connection

server.on('error', function(err){
    console.log('error del server', err.message);
});
server.on('close', function(){
    console.log('servidor cerrado');
});

server.listen(4001);