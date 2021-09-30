/*....... DAVID  ...... */ 


/*......... DANIEL  ...... */ 


/*.......  ALEX  ...... */ 
const { agregarRegistro } = require("./form");
console.log("Hola Mundo");


function agregarRegistro(){
    
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    
    let registro = {Nombre: nombre, Apellidos: apellidos, Teléfono: telefono, Correo: correo,  Contraseña: password};
    var arreglo = arreglo.push(registro);
    console.log("Los datos ingresados son:" <br> "Nombre: " + nombre <br> + "Apellidos: " + apellidos <br> + "Teléfono: " + telefono <br> + 
    "Correo: " + correo <br> + "Contraseña: " + password);

}
function filtrarCorreo(arreglo){
    resultado = arreglo.filter(resultado => /gmail.com/.test(arreglo.Correo) === true);
    
    return resultado 
}

/*....... JUAN F ...... */ 


/*......... MICHAEL ...... */ 





module.exports = agregarRegistro;filtrarCorreo
