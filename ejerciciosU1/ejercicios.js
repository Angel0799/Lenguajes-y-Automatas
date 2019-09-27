console.log("EJERCICIO_1");
//EJERCICIO1
let mensaje = "Hola otorrinolaringologo necesito curar mis problemas estomacales podria ayudarme señor";
let newMensaje = mensaje.replace(/[a-z]{7,}/g,"");
console.log(newMensaje);

console.log("EJERCICIO_2");
//EJERCICIO2
let mensaje1 = "cutiz";
let newMensaje1 = mensaje1.replace(/[^aeiou]$/g,"");
console.log(newMensaje1);

console.log("EJERCICIO_3");
//EJERCICIO3
let pala = /(M|m)[^aeiou+]/; 
console.log(pala.test("Mpbape"));
console.log(pala.test("Mubape"));

//EJERCICIO4
console.log("EJERCICIO_4"); 
let ter = /['""']/;
console.log(ter.test('vamos a comprar unas "camas" en mi casa'));
console.log(ter.test('vamos a comprar unas camas en mi casa'));

console.log("EJERCICIO_5");
//EJERCICIO5
let e5 = /(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/;
console.log(e5.test("compañero mi ip´s de mi wifi es 172.16.15.254"));
console.log(e5.test("compañero mi ip´s de mi wifi es 7827.1677.715.1"));

console.log("EJERCICIO_6");
//EJERCICIO6
let te = /(\d{1,2})[:](\d{1,2})(pm|am)/;
console.log(te.test("vas avenir hoy alas 12:30pm para hacer la tarea"));
console.log(te.test("vas avenir hoy alas 12:799pm para hacer la tarea"));

console.log("EJERCICIO_7");
//EJERCICIO7
let tel = /(\d{1,3})[-|/](\d{1,3})[-|/](\d{4})/;
console.log(tel.test("hola amigo este es mi numero 985-146-7914 marcame y nos ponemos de acuerdo"));
console.log(tel.test("hola amigo este es mi numero 985-146-791 marcame y nos ponemos de acuerdo"));

console.log("EJERCICIO_8");
//EJERCICIO8 
let co = /(\W{0,}|\w{0,})(@{1})(gmail|itsva|hotmail)(.edu)(.com|.es|.mx)/;
console.log(co.test("mandamelo ami correo amigo gordo2.diaz@itsva.edu.mx"));

console.log("EJERCICIO_9");
//ejercicio9
let ur = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log(ur.test("https://www.w3schools.com/html/default.asp"));
console.log(ur.test("www.wikipedia.org"));

console.log("EJERCICIO_10");
//ejercicio10
let cod = /\d{5,5}/;
console.log(cod.test("mandamelo ami ciudad mi codigo postal es 97782"));
console.log(cod.test("mandamelo ami ciudad mi codigo postal es 9778"));
