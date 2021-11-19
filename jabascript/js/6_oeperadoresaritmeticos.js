"user strict"
/*
suma............+
resta...........-
multiplicacion..* 
division......../
residiu.........%
*/

/* crear 3 productos, los inicializan con un valor */
/* a los 3 prodcutos les van a descontar el 5% */
/* existencia de cada producto y hallar el costo del inventario*/

/* crear 3 productos. dichos productos seran inicializados con un valor. a cada producto le van a descontar el 5% y cada producto tiene una existencia. al final determinar el valor total del inventario teniendo en cuenta el descuento.*/

/*declarando e inicializando las variables */
var arroz = 25700;
var yuca = 34566;
var arracacha = 74773;

var arrozConDesc = arroz - (arroz * .05);
console.log(arrozConDesc);

var yucaConDesc = yuca - (yuca * .05)
console.log(yucaConDesc);

var arracachaConDesc = arracacha - (arracacha* .05)
console.log(arracachaConDesc);

var valorTotal = arrozConDesc + yucaConDesc + arracachaConDesc;
console.log(" el valor total de los productos con descuento es de $" + valorTotal);


