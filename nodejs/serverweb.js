const {createServer} = require("http");

let  server = createServer((Request,Response) => {
    Response.whriteHead(200,{"Content-Type": "text/html"});
    Response.whrite("<hh1>Hola a Todos</h1><p>Ejemplo de un Automata </p>");
    Response.end();

});

server.listen(8000);
console.log("Servidor en Escucha en puerto 8000");