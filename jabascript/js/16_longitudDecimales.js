"use strict"
var numero1 = 25.45435
var numero1Dec=numero1.toFixed(3);
console.log(numero1Dec)
// slice
var numero1Str = numero1.toString();
var digitosAntesPunto = 0;
for(var i = 0; i < numero1Str.length; i++) {
    if (numero1Str[i] === " . ") {
        digitosAntesPunto = i;
    }
}
console.log(numero1Str)
console.log(numero1Str.slice(0, (digitosAntesPunto + 4 )));