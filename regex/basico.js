let re1 = new RegExp("abc");// expresan lo mismo pero de distinta manera 
let re2 = /[0-9]/;// expresan lo mismo pero de distinta manera 

result = re1.test ("abc");
console.log(result);//true
result = re2.test ("aniversario rn 1985");
console.log(result);//true

//expresar una fecha de nacimiento
let re3 =  /\d+[-|/]\d+[-|/]\d+/;//para que la expersion acepte - o / debemos indicarselo con [-|/]

console.log(re3.test("13/07/1999"));
console.log(re3.test("23-05-2000"));

//otra manera de expresar fecha 
let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;


var re6 = /[aeiou]/;//la expresion dentro de los corchetes los trata por separado
console.log(re6.test("start"));//true  

//remplazar todas las vocales en la palabra correcaminos
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[aeiou]/g,"*");
console.log(newMensaje);

//remplazar la vocal al final indicandolo con el signo de $
let mensaje1 = "ojo";
let newmensaje1 = mensaje1.replace(/[aeiou]$/g,"*");
console.log(newmensaje1);

//remplaza las no vocales
let mensaje2 = "avioneta";
let newmensaje2 = mensaje2.replace(/[^aeiou]/g,"+");
console.log(newmensaje2);

//remplazar la ultima letra de la palabra
let mensaje3 = "pet";
let newmensaje3 = mensaje3.replace(/[^aeiou]$/g,"+");
console.log(newmensaje3);

//remplazar palabras con mas de 4 letras 
let mensaje4 = "el 20 de enero de 2019 se dio inicio ala 3 semana nacional";
let newmensaje4 = mensaje4.replace(/[a-z]{4,}/g,"0");
console.log(newmensaje4);

var histo = " \
Desde el punto de vista de la Lingüística  el Trato literario es aquel donde predomina \
la función poética del lenguaje, es decir, Dronde la composición del texto atiende fundamentalmente \
a la Fraccion en sí del lenguaje, a su belleza y a su capacidad para recrearnos mundos imaginarios";

//var expersion = /[a-z]{10,}/g //expresiones palabras que tengan mas de 10 letras 
//var expresion = /[A-Z][a-z]+/g //encuentra nombre propios
var expresion = /[A-Z][^aeiou][a-z]+/g //
result = histo.match(expresion);//la funcion match encuentra dentro de un parrafo la expresion señalada
console.log(result);
