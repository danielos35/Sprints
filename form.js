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
}
function checkApellido(){
   
    let name = document.getElementById("apellidos").value; 
    const regex = /[0-9]/;
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

}
/*....... DAVID  ...... */ 
function checkTelefono(valor) {      
	
      var telefono = document.getElementById("telefono").value;
   	  var valoresok = /^[0-9]+$/;
   	  if (telefono.match(valoresok) && telefono.length === 7) {
      	  	return true;
		}
   	  else{
			 return false;
        }
}

/*....... JUAN F ...... */ 
function checkCorreo() {
    const correo=document.getElementById("correo").value;
    const emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    /*....Todo tipo de caracteres...*/
    /*emailRegex =/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i*/ 

    if (emailRegex.test(correo)){

      if (emailRegex.test(correo)){

        return true;
    } else {
        return false
    }
}
}
/*.......  ALEX  ...... */ 

// Validación el cumplimiento de las políticas para el campo contraseña.
function checkContrasena(){
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
    checkNombre,checkApellido,checkTelefono,checkCorreo,checkContrasena
}
function checkContrasena(){
    const contrasena=document.getElementById("password").value;
    const contrasenaRegex= /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    if(contrasenaRegex.test(contrasena) && contrasena.length>=8){
        return true;

    }else{
        return false;
    }
}


/*.......  GENERAL  ...... */ 


let arreglo = []

function agregarRegistro(){

    arreglo.push(document.getElementById("Apellidos").value);
    console.log('Su apellido es:' + value); 

}
/*.......  GRUPO 1  ...... */ 


/*.......  GRUPO 2  ...... */ 

function filtrarCorreo(){

    let gmail = /gmail.com/

    for (let i = 0; i<arreglo.length; i= i+1){

        if(gmail.test(arreglo[i])){
            console.log(arreglo[i]);
        }
        else{
        continue
        }
        
    }
}



module.exports = {
    checkNombre,checkApellido,checkTelefono,checkCorreo,checkContrasena, agregarRegistro, filtrarCorreo
}