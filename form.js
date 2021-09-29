/*......... MICHAEL ...... */ 
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

function checkApellido(){
   
    let name = document.getElementById("apellidos").value; 
    const regex = /[0-9]/;
    if (name.length < 4 || name.length >30 || regex.test(name) || name == ""){
        return false;
    }else{
        return true; 
    }   
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
      if (emailRegex.test(correo)){
        return true;
    } else {
        return false
    }
}
/*.......  ALEX  ...... */ 
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
    console.log('Su apellido es:' + value); /*prueba.

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
}