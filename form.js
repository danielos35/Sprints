/*......... MICHAEL ...... */ 

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
    // NombreVariable.test(NombreVariable2) = Analiza si los datos en NombreVariable2 se encuentran en NombreVariable1
    if (name.length < 4 || name.length >30 || regex.test(name) || name == ""){
        return false;
    }else{
        return true; 
    }
     
} 

// Exportar la función para la calificación del bot.
module.exports = checkApellido(apellido);





/*....... DAVID  ...... */ 


/*....... JUAN F ...... */ 


function JScheckCorreo(_email) {

    //Acceder al dato dentro de la variable
    _email = _email.value; 

    // NombreVariable.Length = Devuelve la cantidad de caracteres
    // NombreVariable.test(NombreVariable2) = Analiza si los datos en NombreVariable2 se encuentran en NombreVariable1
    if (_email.length < 4 || _email.length >30 || regex.test(_email) || _email == ""){
        return false;
    }else{
        return true; 
    }
    
}
module.exports = checkCorreo;


/*.......  ALEX  ...... */ 