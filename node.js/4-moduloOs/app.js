const os = require("os");
console.log("identificacion del equipo");
console.log('procesador:' ,os.cpus());
console.log("arquitectura: ", os.platform(), os.arch());
console.log("memoria disponible: " , os.freemem());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.version());