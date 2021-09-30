/*....... GRUPO 1  ...... */ 





// Función Agregar Registro
/*.......  GRUPO 2  ...... */ 
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
// Función Filtar Correo
function filtrarCorreo(arreglo){
    let filtro = "gmail.com";
    let filtroRegexp = RegExp(filtro);
    resultado = arreglo.filter(arreglo => filtroRegexp.test(arreglo.Correo) === true);
    
    return resultado 
}
module.exports = {agregarRegistro,filtrarCorreo}
