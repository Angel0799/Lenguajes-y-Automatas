const {createServer} = require("net");

var server = createServer();
var port = 4001;

server.on('listening', function () {
    console.log('servidor excuchado en puerto 4001');
});

server.on('connection', function(socket){
    console.log('el servidor tiene una nueva conexion..');
    socket.end();
    server.close();
});

server.on('close', function (){
    console.log('el servidor esta cerrado..');
});

server.on('error', function (err){
    console.log('error en la conexion', err.message);
});

server.listen(port);