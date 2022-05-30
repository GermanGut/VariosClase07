let saludo = "hola";

//console.log(repetirSaludo(3));

/* DECLARADA */
function repetirSaludo(cantidad) {

    return saludo.repeat(cantidad)

}
/* EXPRESADA */
const repetirSaludo2 = function(cantidad,mensaje) {

    return mensaje.repeat(cantidad)

}

console.log(repetirSaludo2(5,"Chauuu"));