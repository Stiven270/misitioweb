"use strict"
// ejercicio uno
console.log("hola mundo")
// segundo ejercicio
let nombre ="(sr)Daniel Bravo";
if(nombre){
console.log ("bienvenido"+" "+nombre)
};
// tercer ejercicio
let costoProducto = 50000;
let domicilio = 5000;
let impuesto =0.10;
let subTotal = costoProducto + (costoProducto*impuesto);
let costoTotal = subTotal + domicilio;
console.log("el costo del producto es de"+" "+costoProducto)
console.log("subtotal del producto"+" "+subTotal);
console.log("el costo total seria"+" "+costoTotal);
// cuarto ejercicio
var costoInicial = 60000
var primerDesc = 0
var segdesc = 0.05
var tercdesc = 0.1
var producto1 = costoInicial-(costoInicial*segdesc)
var producto2 = costoInicial-(costoInicial*tercdesc)
console.log("el valor inicial es de"+" "+costoInicial)
if (costoInicial<30000){
    console.log("sin descuento" )
}
else if(costoInicial>30000 && costoInicial<100000){
    console.log("valor final"+" "+producto1)
}
else if (costoInicial>=100000){
    console.log("valor final"+" "+producto2)
}


