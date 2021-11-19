"use strict"
/* &&.......AND */
/* ||.......OR */
/* ^........XOR */

/* subsidio de transporte.
si el aprendiz tiene SISBEN pero no tiene jovenbes en accion
puede acceder al beceficio del subsidio.
si el aprendiz tiene jovenes en accion pero no tienen SISBEN 
tambien puede acceder al beneficio
si el aprendiz tiene jovenes en accion y tiene SISBEN no puede acceder la beneficio.
si el aprendiz no tiene SISBEN y no tiene jovenes en accion NO puede acceder al beceficio*/

var sisbenAprendiz = true;
var jovenesAccionAprendiz = false;

if(sisbenAprendiz === true ^jovenesAccionAprendiz === true) {
    console.log("usted puede acceder al beneficio.");
}
else {
    console.log("usted no puede acceder al beneficio")
}