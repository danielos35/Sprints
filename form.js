/*......... MICHAEL ...... */ 
/*...Validacion del campo Nombre...*/
function checkNombre(valor){
    const nombre=document.getElementById("nombre").value;
    const regex= /[0-9]/;
    if(nombre.length<4 || nombre.length>30 || regex.test(nombre) || nombre==""){
        return false;
    }else{
        return true;
    }
}

/*......... DANIEL  ...... */ 

// Importar Id desde HTML.
let apellido = document.getElementById("Apellido");

function checkApellido(name){

    //Acceder al dato dentro de la variable
    name = name.value; 

    // regex contiene un intervalo de numeros del 0-9: /[0-9]/.
    //Si se necesita omitir letras, se pueden crear intervalos alfabeticos /[a-z]/ minusculas /[A-Z]/ MAYUSCULAS
    const regex = /[0-9]/;

    // NombreVariable.Length = Devuelve la cantidad de caracteres
    // NombreVariable1.test(NombreVariable2) = Analiza si los datos en NombreVariable1 se encuentran en NombreVariable2
    if (name.length < 4 || name.length >30 || regex.test(name) || name == ""){
        return false;
    }else{
        return true; 
    }
    
} 
// Exportar la función para la calificación del bot.
module.exports = checkApellido(apellido);

/*....... DAVID  ...... */ 
// Función que recibe como argumento el telefono


function checkTelefono(valor) {      
	//valores numericos aceptados
      var telefono = document.getElementById("telefono").value;
   	  var valoresok = /^[0-9]+$/;
        //compara el contenido de telefono y su longitud
   	  if (telefono.match(valoresok) && telefono.length === 7) {
      	  	return true;
		}
   	  else{
			return false;
        }
}


/*....... JUAN F ...... */ 

function checkCorreo(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
    alert("La dirección de email " + valor + " es correcta!.");
    } else {
    alert("La dirección de email es incorrecta!.");
    }
}
    module.exports = checkCorreo();


/*.......  ALEX  ...... */ 
// Validación el cumplimiento de las políticas para el campo contraseña.

var p1 = document.getElementById("passwd").value; 
var p2 = document.getElementById("passwd2").value;
function checkContrasena ( pswd){
var p1 = document.getElementById("passwd").value;
var p2 = document.getElementById("passwd2").value;
// 1. Por lo menos una letra mayúscula
if ( password.match(/[A-Z]/) ) {
    $('#capital').removeClass('invalid').addClass('valid');
} else {
    $('#capital').removeClass('valid').addClass('invalid');
}
// 2. Por lo menos una minúscula
if ( password.match(/[a-z]/) ) {
    $('#capital').removeClass('invalid').addClass('valid');
} else {
    $('#capital').removeClass('valid').addClass('invalid');
}
// 3. Por lo menos un número 
if ( password.match(/\d/) ) {
    $('#number').removeClass('invalid').addClass('valid');
} 
else {
    $('#number').removeClass('valid').addClass('invalid');
}
   
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}
// 4. longitud mayor o igual a 8 dígitos. 
if (p1.length < 8 || p2.length < 8) {
    alert("La longitud de la contraseña debe sder mayor o igual a 8 dígitos");
    return false;
  }

// 5. Campo es obligatorio, no sepuede dejar vacío.
if (p1.length == 0 || p2.length == 0) {
    alert("Los campos de la password no pueden quedar vacios");
    return false;
  }

}

//exporta las funciones
module.exports = {
	checkTelefono,checkNombre
}