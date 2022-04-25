"user strict"
class vuelos {
    constructor(origen, destino,horaInicio,horaFinal, precio,directo){
        this.origen = origen;
        this.destino = destino;
        this.precio =precio;
        this.horaInicio = horaInicio;
        this.horaFinal = horaFinal;
        this.directo = directo;
    }
}
let vuelo = [{
    "origen" : "Bogotá",
    "destino" :"Cartagena",
    "precio" : 250000 + " " + "Cop",
    "horaInicio" : "05:08",
    "horaFinal" : "06:11",
    "directo" : "Vuelo Directo",
},
{
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio" : 290000 + " " + "Cop",
    "horaInicio" : "06:09",
    "horaFinal" : "6:50",
    "directo" : "Vuelo Directo",

},
{
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio" : 200000 + " " + "Cop",
    "horaInicio" : "06:00",
    "horaFinal" : "8:10",
    "directo" : "Vuelo Directo",
},
{
    "origen": "Bogotá",
    "destino": "Cartagena",
    "precio" : 520000 + " " + "Cop",
    "horaInicio" : "05:00",
    "horaFinal" : "5:40",
    "directo" : "Vuelo Directo",
}];
function MostrarVuelos (){
for(let i = 0; i < vuelo.length; i++)
         cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio,vuelo[i].horaInicio,vuelo[i].horaFinal, vuelo[i].directo);
         
 
   
}
function cargarVuelos(origen, destino, precio, horaInicio, horaFinal, directo){
    let contentVuelo = document.createElement("div");
    let contentPrincpial = document.getElementById("contenedor");
    contentPrincpial.appendChild(contentVuelo);
    contentVuelo.setAttribute("class", "style-contentVuelo")

    // let contentOrigen = document.createElement("div");
    // contentVuelo.appendChild(contentOrigen);


    let origenVuelo = document.createElement("label");
    contentVuelo.appendChild(origenVuelo);
    let nodo1 = document.createTextNode(origen);
    origenVuelo.appendChild(nodo1);
    origenVuelo.setAttribute("class", "style-origen")

    
    let horaInicioVuelo = document.createElement("label");
    contentVuelo.appendChild(horaInicioVuelo);
    let nodo4 = document.createTextNode(horaInicio);
    horaInicioVuelo.appendChild(nodo4);
    horaInicioVuelo.setAttribute("class", "style-horaInicio")


    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let nodo2 = document.createTextNode(destino);
    destinoVuelo.appendChild(nodo2);
    destinoVuelo.setAttribute("class", "style-destino")

    let horaFinalVuelo = document.createElement("label");
    contentVuelo.appendChild(horaFinalVuelo);
    let nodo5 = document.createTextNode(horaFinal);
    horaFinalVuelo.appendChild(nodo5);
    horaFinalVuelo.setAttribute("class", "style-horaFinal")


    let precioVuelo = document.createElement("label");
    contentVuelo.appendChild(precioVuelo);
    let nodo3 = document.createTextNode(precio);
    precioVuelo.appendChild(nodo3);
    precioVuelo.setAttribute("class", "style-precio")

    let directoVuelo = document.createElement("label");
    contentVuelo.appendChild(directoVuelo);
    let nodo6 = document.createTextNode(directo);
    directoVuelo.appendChild(nodo6);
    directoVuelo.setAttribute("class", "style-directo")



    


    
}