let registros = [{correo:"juan@gmail.com",contrasena:"SecurePassword123"}];

function agregarRegistro(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    
    let usuario = {nombre: nombre, apellido: apellidos, telefono: telefono, correo: correo,  contrasena: contrasena};
    registros.push(usuario);
};

function login(){
	let valor = document.getElementById("captcha").value;
	let codigo = validarCAPTCHA(valor);
	let email = document.getElementById("correo").value;
	let clave = document.getElementById("contrasena").value;
	
	for (var i in registros){
		if (email == registros[i].correo && clave == registros[i].contrasena && codigo == true){
			return true;
		}
		else
		{
			return false;
		}

	
	};
};

function validarCAPTCHA(valor){
	if (valor == 1000)
	{
		return true;
	}
	else{
		return false;
	}

};

module.exports = {agregarRegistro,login,validarCAPTCHA};
module.exports.registros = registros;


