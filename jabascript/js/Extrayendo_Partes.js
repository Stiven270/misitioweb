var anyo2= "2019";
var auxConsecitivo = anyo2.slice(2,4);
console.log(auxConsecitivo)

// contando caracteres
var adsi="analisis y desarrollo de sistemas de informacion";
console.log("longitud " + adsi.length)

// hallando dobles espacios
var nombres="Daniel  Stiven";
for (i=0; i < nombres.length; i++){
    if(nombres.slice(i, (i + 2)) === "  "){
        console.log("la cadena tiene espacios dobles");
        break;
    }
}

