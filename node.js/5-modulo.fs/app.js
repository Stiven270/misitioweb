const fs = require("fs");
// mi primer callback
fs.readFile('\prueba.txt', 'UTF-8', (err,data) => {
        if(err){
            console.log("error: " , err);
        }
        else{
            console.log(data);
        }
});
let insertarTexto = "hola, vengo desde node.js v2";
fs.writeFile('\prueba.txt',insertarTexto,(err) =>{
    if (err){
        console.log("error: ", err);
    }
    else{
        console.log("operacion finalizada con exito");
    }
});
