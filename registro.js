/*....... DAVID  ...... */ 


/*......... DANIEL  ...... */ 


/*.......  ALEX  ...... */ 
// const { agregarRegistro } = require("./form");
// console.log("Hola Mundo");


function agregarRegistro(){
    
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    var registros = new Array();
    let usuario = {Nombre: nombre, Apellidos: apellidos, Teléfono: telefono, Correo: correo,  Contraseña: password};
    registros.push(usuario);
    console.log(usuario);
    return registros

}
function filtrarCorreo(arreglo){
    let filtro = "gmail.com";
    let filtroRegexp = RegExp(filtro);
    resultado = arreglo.filter(arreglo => filtroRegexp.test(arreglo.Correo) === true);
    
    return resultado 
}

/*....... JUAN F ...... */ 


/*......... MICHAEL ...... */ 





module.exports = {agregarRegistro,filtrarCorreo}
