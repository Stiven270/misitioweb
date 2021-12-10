"use strict"
var fechaActual = new Date();
console.log(fechaActual)
// metodos para descomponer la fecha
var anyoActual = fechaActual.getFullYear()
console.log("año actual:" + anyoActual);
var mesActual = fechaActual.getMonth();
console.log("mes actual:" + (mesActual+1));
var diaActual = fechaActual.getDate();
console.log("dia actual:" + (diaActual));
var diaSemana = fechaActual.getDate();
console.log("dia semana: " + (diaSemana + 1));
var horaActual = fechaActual.getHours();
console.log("hora actual:" + horaActual);
var munutosActual = fechaActual.getMinutes();
console.log("minutos actual:" + munutosActual)
var segundosActual = fechaActual.getSeconds();
console.log("segundos actual: " + (segundosActual));
var msActual = fechaActual.getMilliseconds();
console.log("milisegundos:" + msActual)
var ms1970 = fechaActual.getTime();
console.log("ms desde 1970:" + ms1970)

console.log("hoy es: " + diaActual + " del mes " + mesActual +" del año " + anyoActual +" son las " + horaActual + " y " + munutosActual+ " p.m") ;

var diasSemanas = ["domingo" , "lunes" , "master" , "miercoles" , "jueves" , "viernes" , "sabado"];
var diasSemanaStr = diasSemanas[diaSemana]
var mesAnio = 