const saludar = () => {
    return "Hola a Todos";
}

let persona = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 20,
    peso : 115,
    hobbies : ["futbol","musica","internet"],
    saludar
};

persona.apellido = "perez Sosa";
console.log(persona.nombre + "" + persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar());

//arreglo de objetos
let frutas = [
    {
        nombre: "grosella",
        familia : "saxi",
        calorias : 29.9
    },
    {
        nombre: "grsandia",
        familia : "sandilus",
        calorias : 70.9
    },
    {
        nombre: "pera",
        familia : "perusi",
        calorias : 59.9
    }
];

for (let i=0; i<frutas.length; i+=1){
    console.log(frutas[i]);
   }

 