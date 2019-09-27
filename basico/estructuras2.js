
var band = true;

do{

    let respuesta = prompt("¿cual es tu clima favorito?");

    switch (respuesta)
    {
        case "lluvia" :
            alert("recuerda llevar paraguas");
            break;
        case "sol" :
            alert("lleva ropa ligera");
            break;
        case "nublado" :
            alert("sal a pasear");
            break;
        default:
             band = false;    
    }

}while (band);

alert("ADIOS MACTA....");