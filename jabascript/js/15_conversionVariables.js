"use strict"
// conversion implisita
var numero1 = 4;
var numero2 = "12";
console.log("resultado de la suma: " + (numero1 + numero2));
console.log("resultado de la resta: " + (numero2 - numero1));
console.log("resultado de la multiplicacion: " + (numero1 * numero2));
console.log("resultado de la division: " + (numero2 / numero1));

// conversion Explisita
var numero3 = "6";
var numero4 = "12";
var numero3Int = parseInt(numero3)
var numero4Int = parseInt(numero4)
console.log("resultado de la suma: " + (numero3Int + numero4Int));

// conversion explisita a string
var numero5 = 12;
var numero6 = 10;
var numero5Str = numero5.toString();
var numero6Str = numero6.toString();
console.log("resultado de la suma:" + (numero5Str + numero6Str));
console.log("resultado de la resta:" + (numero5Str - numero6Str));

// generando numeros aleatorios
var numero1 = Math.random();
var numero1Random = (numero1 * 1000);
var numero1Redondeado = Math.floor(numero1Random)
console.log(numero1Redondeado);

/* como podrianos con un condicional mostrar que se muestren menos digitos */
/* condicional de tipo if */
if(numero1Redondeado> 100 && numero1Redondeado <999) {
    console.log(numero1Redondeado);
}
if(numero1Redondeado > 100 && numero1Redondeado <999) {
    console.log("0" + numero1Redondeado.toString());
}
if(numero1Redondeado > 10 && numero1Redondeado <99) {
    console.log("00" + numero1Redondeado.toString());
}



