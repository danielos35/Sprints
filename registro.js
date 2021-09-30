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
let registro = [];
function agregarRegistro(){
	let datos ={
		nombre: document.getElementById('nombre').value,
		apellido: document.getElementById('apellidos').value,
		telefono: document.getElementById('telefono').value,
		correo: document.getElementById('correo').value,
		contrasena: document.getElementById('password').value
	}
	registro.push(datos);
}

module.exports = {
	agregarRegistro,
}
function ordenarArreglo(){
	console.log(registro.sort(function (a, b) {
		var apellido1 = a.apellido.toLowerCase();
		var apellido2 = b.apellido.toLowerCase();
		if (apellido1 < apellido2){
			return -1;
		}
		if (apellido1 > apellido2){
			return 1;
		}
		return 0;
	}));
}


/*......... Michael-Alex-JuanF...... */ 
// Función Filtar Correo


//Exportar Funciones
module.exports={
    agregarRegistro
}