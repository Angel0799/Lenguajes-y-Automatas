var socket = io.connect('192.168.43.20:8001', { 'forceNew': true });

socket.on('messages', function(data) {
    console.log(data);
    render(data);
    //var expresion = /[0-9]+/g
    
})

function render (data) {
    var html = data.map(function(elem, index) {
        return(`<div>
                   <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                    <br>
                    mayuscula = <em>${elem.mayus}</em> <br> vocales = <em>${elem.vocal}</em> <br> palabras = <em>${elem.pala}</em> <br> numeros = <em>${elem.numer}</em> <br> No vocales = <em>${elem.novoca}</em> 
                </div>`);
    }).join(" ");            
  
    document.getElementById('messages').innerHTML = html;
}
function addMessage(_e){
    var payload = {
       author: document.getElementById('username').value,
       text: document.getElementById('texto').value,
       //expresiones
        mayus: document.getElementById('texto').value.match(/[A-Z][a-z]+/gm).length,
        vocal: document.getElementById('texto').value.match(/[aeiou]/gi).length,
        pala:  document.getElementById('texto').value.replace (/\r?\n/g," ").replace (/[ ]+/g," ").replace (/^ /,"").replace (/ $/,"").split (" ").length,
        numer: document.getElementById('texto').value.match(/[\d]/g).length,
        novoca:document.getElementById('texto').value.match(/[a-záéíóúA-ZÁÉÍÓÚ]+([^aeiouáéíóú\? ])\b/g).length 
    };

    socket.emit('new-message', payload); 
    return false;
}