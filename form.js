/*......... MICHAEL ...... */ 
/*...Validacion del campo Nombre...*/
function checkNombre(){
    const name=document.getElementById("nombre").value;
    const regex= /[0-9]/;
    if(name.length<4 || name.length>30 || regex.test(name) || name==""){
        return false;
    }else{
        return true;
    }
}
module.exports= checkNombre;

/*......... DANIEL  ...... */ 

// Importar Id desde HTML.
function checkApellido(){

    //Acceder al dato dentro de la variable
    let name = document.getElementById("apellidos").value; 

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
// Exportar la función para la calificación del bot (Se hace al final de todas la funciones)


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
function checkContrasena(valor){
    const contrasena=document.getElementById("password").value;
    const contrasenaRegex= /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    /*...Con Caracteres Especiales...*/
    /*const ContrasenaRegex = /^(?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/*/
    if(contrasenaRegex.test(contrasena) && contrasena.length>=8){
        return true;

    }else{
        return false;
    }
}
//exporta las funciones
module.exports = {
    checkApellido,checkTelefono
}