"user strict"
class vuelos {
    constructor(origen, destino, precio){
        this.origen = origen;
        this.destino = destino;
        this.precio =precio;
    }
}
let vuelo = [{
    "origen" : "BGT",
    "destino" :"CTG",
    "precio" : 250000,
},
{
    "origen": "BGT",
    "destino": "CTG",
    "precio" : 480000,
}];
function MostrarVuelos (){
for(let i = 0; i < vuelo.length; i++)
         cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio);
         
 
   
}
function cargarVuelos(origen, destino, precio){
    let contentVuelo = document.createElement("div");
    let contentPrincpial = document.getElementById("contenedor");
    contentPrincpial.appendChild(contentVuelo);
    contentVuelo.setAttribute("class", "style-contentVuelo")

    let contentOrigen = document.createElement("div");
    contentVuelo.appendChild(contentOrigen);


    let origenVuelo = document.createElement("label");
    contentVuelo.appendChild(origenVuelo);
    let nodo1 = document.createTextNode(origen);
    origenVuelo.appendChild(nodo1);


    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let nodo2 = document.createTextNode(destino);
    destinoVuelo.appendChild(nodo2);

    let precioVuelo = document.createElement("label");
    contentVuelo.appendChild(precioVuelo);
    let nodo3 = document.createTextNode(precio);
    precioVuelo.appendChild(nodo3);



    


    
}