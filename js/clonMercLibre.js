class Motocicleta {
    constructor (marca, modelo, precio, img){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.img = img;
       
    }
    
}
let moto = new  Motocicleta("yamaha", " 0Kilometros ", " $20.000.000", "img/moto_Yamaha.png");
let deportiva = new Motocicleta ("Deportiva", " 0Kilometros ", " $25.800.000", "img/moto_Deportiva.jpg");
let honda = new Motocicleta ("Honda"    , " 0Kilometros", " $27.000.000", "img/moto_Honda.png");

function validarYamaha() {
    

    mostrarMoto();
}
function mostrarMoto (){
    let contentPrincipal  = document.getElementById("moticos");
    let contentMoto = document.createElement("div");
    contentPrincipal.appendChild(contentMoto);
    contentMoto.setAttribute("class", "div");

    let marcaMoto = document.createElement("label");
    contentMoto.appendChild(marcaMoto);
    let textMarca = document.createTextNode(moto.marca)
    marcaMoto.appendChild(textMarca);
    marcaMoto.setAttribute("class", "label1");

    
    let modeloMoto = document.createElement("label");
    contentMoto.appendChild(modeloMoto);
    let textModelo = document.createTextNode(moto.modelo)
    modeloMoto.appendChild(textModelo);
    modeloMoto.setAttribute("class", "label2");

    
    let precioMoto = document.createElement("label");
    contentMoto.appendChild(precioMoto);
    let textPrecio = document.createTextNode(moto.precio)
    precioMoto.appendChild(textPrecio);
    precioMoto.setAttribute("class", "label3");

 
    let imagenMoto = document.createElement("img");
    contentMoto.appendChild(imagenMoto);
    imagenMoto.setAttribute("src", moto.img);
    imagenMoto.setAttribute("class","img")
}

function validarDeportiva () {


    mostrarDeportiva ();
}

function mostrarDeportiva () {
    let contenedorPrinDeportiva = document.getElementById("moticos");
    let contentDeportiva    = document.createElement("div");
    contenedorPrinDeportiva.appendChild(contentDeportiva);
    contentDeportiva.setAttribute("class", "div");

    let marcaDeportiva = document.createElement("label");
    contentDeportiva.appendChild(marcaDeportiva);
    let textDeportivaMarca = document.createTextNode(deportiva.marca);
    marcaDeportiva.appendChild(textDeportivaMarca);
    marcaDeportiva.setAttribute("class", "label1");

    let modeloDeportiva = document.createElement("label");
    contentDeportiva.appendChild(modeloDeportiva);
    let textModelDeportiva = document.createTextNode(deportiva.modelo);
    modeloDeportiva.appendChild(textModelDeportiva);
    modeloDeportiva.setAttribute("class", "label2");

    let precioDeportiva = document.createElement("label");
    contentDeportiva.appendChild(precioDeportiva);
    let textPrecioDeportiva = document.createTextNode(deportiva.precio);
    precioDeportiva.appendChild(textPrecioDeportiva);
    precioDeportiva.setAttribute("class", "label3");

    let imgDeportiva = document.createElement("img");
    contentDeportiva.appendChild(imgDeportiva);
    imgDeportiva.setAttribute("src", deportiva.img)
    imgDeportiva.setAttribute("class","img")
}

 function validarHonda() {
     

    mostrarHonda();
 }

function mostrarHonda () {
    let contenedorPrincHonda = document.getElementById("moticos");
    let contnedorHonda = document.createElement("div");
    contenedorPrincHonda.appendChild(contnedorHonda);
    contnedorHonda.setAttribute("class", "div");

    let marcaHonda = document.createElement("label");
    contnedorHonda.appendChild(marcaHonda);
    let textMarcaHonda = document.createTextNode(honda.marca);
    marcaHonda.appendChild(textMarcaHonda);
    marcaHonda.setAttribute("class", "label1");

    let modeloHonda = document.createElement("label");
    contnedorHonda.appendChild(modeloHonda);
    let textModeloHonda = document.createTextNode(honda.modelo);
    modeloHonda.appendChild(textModeloHonda);
    modeloHonda.setAttribute("class", "label2");

    let precioHonda = document.createElement("label");
    contnedorHonda.appendChild(precioHonda);
    let textPrecioHonda = document.createTextNode(honda.precio);
    precioHonda.appendChild(textPrecioHonda);
    precioHonda.setAttribute("class", "label3");

    let imgHonda = document.createElement("img");
    contnedorHonda.appendChild(imgHonda);
    imgHonda.setAttribute("src", honda.img)
    imgHonda.setAttribute("class","img")
}
window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Motocicletas" ) {
            mostrarMoto(moto);
            mostrarDeportiva(deportiva);
            mostrarHonda(honda);
        }
        else if (busqueda == "yamaha" ) {
            mostrarMoto(moto);}
        

        else if (busqueda == "deportiva") {
            mostrarDeportiva(deportiva);}

        else if (busqueda == "honda") {
            mostrarHonda(honda);
        }
            
        else {
            this.true;
        } 
        return this. false.alert("no se han encontrado resultados."); 
    }
})
function limpiarVentana () {
    document.getElementById("moticos").innerHTML = " " ;
}




// window.addEventListener("keydown", function (event) {
//     let busqueda = document.getElementById("textBusqueda"),value;
//     if(event.key === "Enter"){
//         limpiarVentana();
//         if (busqueda == "mazda 3") {
//             mostrarVehiculo(auto);
//     }
  
        

//     }

// });
