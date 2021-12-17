"user strict"
/* primer forma de declarar un array */
var usuario1 = new Array();
usuario1[0] = 1;
usuario1[1] = "1084330256";
usuario1[2] = "roberto";
usuario1[3] = "gomez";
usuario1[4] = "2012-11-25";

/* segunda forma de declarar un array */
var usuario2 = new Array(2, "1034568976", "juan felipe", "moreno", "2004-05-06", "san andres", "avianca");

/* 3er. forma de declarar un array */
var usuario3 = [3, "743759844", "daniel", "bravo", "2003-05-06", "cartagena", "america airlines"];

console.log("nombre usuario 1: " + usuario1[2]);
console.log("nombre usuario 2: " + usuario2[2]);
console.log("nombre usuario 3: " + usuario3[2]);

/* contar la cantiodad de caracteres*/
var mensajeUsuario = "no me gusto";
var longitudMensajeUsuario = mensajeUsuario.length;

if(longitudMensajeUsuario >20){
    console.log("el mensaje excede la longitud de caracteres permitidos");
}
else if (longitudMensajeUsuario < 20) {
    console.log("el mensaje fue enviado con exito");
}
else {
    console.log("ha surgido un error!");
}

