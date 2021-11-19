"use strict"
var edad = 11;
var destino = cartagena;
var aerolinea = latam;
var costoTiquete = 250000;
var descuento = .10;
var costoFinal = 0;

if(edad <10 || edad >=70){
    costoTiquete = costoTiquete-(costoTiquete * descuento);
    descuentosUsuario = "por edad";
    if(destinoUsuario===destinoDescuento);{
        costoTiquete - (costoTiquete * descuento);
        descuentosUsuario + ",por destino";
    }
     if (aerolineaUsuario===aerolineaDescuento);{
     costoTiquete=costoTiquete- (costoTiquete*descuento);
     descuentosUsuario += "y por aerolinea"
    }
}
if(descuentosUsuario !="") {
    console.log("usted recibio descuentos por:$" + descuentosUsuario);
    console.log("el valor final del tiquete con descuentos es : $" + costoTiquete);
}

/*sistema de votacion.
teniendo en cuenta la edad del ciudadano,el sistema le informa si puede o no votar. */

var edadCiudadano = 18

if ( edadCiudadano >=18);{
console.log("el usuario puede votar");
 }
else {
    console.log("el usuario no puede votar")
}

