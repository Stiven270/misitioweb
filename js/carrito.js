"user strict"

let inicio = 0
let cantidad = "";
let cantidadProducto
let totalProductos = 1250000;
let cantidadYaProducto

function aumentarUnidades() {


    if(inicio <=9){
        cantidad = document.getElementById("cantidad").value = ++inicio;
        // document.getElementById("total").innerHTML = cantidad;

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;

     

    }
}
function disminuirUnidades() {
    if(inicio >=1){
        cantidad = document.getElementById("cantidad").value = --inicio;
        // document.getElementById("total").innerHTML = cantidad

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById  ("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;
      
    }
}
// function calcularSubtotal() {
//     let numeroUnidades = document.getElementById("cantidad").innerHTML;
//     let valorUnidad = document.getElementById("valorUnidad").innerHTML;

//     let verSubtotal = Number(numeroUnidades) * Number(valorUnidad);

//     document.getElementById("multiplicar").innerHTML = verSubtotal;
//     alert(verSubtotal)
    

// }