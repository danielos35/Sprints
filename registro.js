/*......... Team ...... */ 
// Función Agregar Registro
let Registros=[]
function agregarRegistro() {
    const name=document.getElementById("nombre").value; 
    const apellidos = document.getElementById("apellidos").value;  
    const telefono = document.getElementById("telefono").value; 
    const correo=document.getElementById("correo").value; 
    const contrasena=document.getElementById("password").value; 
    Registros.push([name,apellidos,telefono,correo,contrasena]);
}


/*.........Daniel-David ...... */ 
// Función Ordenar Registro



/*......... Michael-Alex-JuanF...... */ 
// Función Filtar Correo


//Exportar Funciones
module.exports={
    agregarRegistro
}