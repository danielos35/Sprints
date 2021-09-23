/*......... MICHAEL ...... */ 
/*...Validacion del campo Nombre...*/
function checkNombre(valor){
    const name=document.getElementById(valor.id).value();
    const regex= /[0-9]/;
    if(name.length<4 || name.length>30 || regex.test(name) || name==""){
        return false;
    }else{
        return true;
    }
}
module.exports= checkNombre();

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
function checkTelefono(telefono)
{
         //valores numericos aceptados
    var valoresok = /^[0-9]+$/;
        //compara el contenido de telefono y su longitud
    if (telefono.value.match(valoresok) && telefono.value.length === 7 ) 
        {
        alert("Gracias por registrarte");
        return true;
        }
    else
        {
        alert("Introduzca un número válido");
    return false;
        }
}
   //exporta la función
module.exports = checkTelefono();

/*....... JUAN F ...... */ 

checkCorreo(valor);
document.getElementById('correo').addEventListener('input', function() {
    var event = Event.target;
    valido = document.getElementById('correoOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(campo.value)) {
        valido.innerText = "válido";
    } else {
        valido.innerText = "incorrecto";
    }
    });
    module.exports = checkCorreo;


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