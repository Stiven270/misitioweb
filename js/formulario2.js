"use strict"
function crearEncabezado() {
    let nodoTabla = document.createElement("table");
    let contenedor = document.getElementById ("table.js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading1 = document.createTextNode("codigo");
    nodoEncabezado1.appendChild(codigoHeading1)

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripHeading1 = document.createTextNode("descripcion");
    nodoEncabezado2.appendChild(descripHeading1)

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading1 = document.createTextNode("valor unitario");
    nodoEncabezado3.appendChild(valorHeading1)

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let cantidadHeading1 = document.createTextNode("Unidades en stock");
    nodoEncabezado4.appendChild(cantidadHeading1)

    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id" , "table-stock");
    
}
function validarTabla() {
    if (!document.getElementById("table-stock")) {
        crearEncabezado();
        
    }

}
function cargarProducto() {
    validarTabla();
    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo);

}