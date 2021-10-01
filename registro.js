/*......... Team ...... */ 
// Clase Usuario
class Usuario{
    constructor(nombre,apellido,telefono,correo,contrasena){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.correo=correo;
        this.contrasena=contrasena;
    }
}
// Función Agregar Registro
let registros=[]
function agregarRegistro() {
    const nombre=document.getElementById("nombre").value; 
    const apellido = document.getElementById("apellido").value;  
    const telefono = document.getElementById("telefono").value; 
    const correo=document.getElementById("correo").value; 
    const contrasena=document.getElementById("contrasena").value; 
    //Usuario
    let usuario=new Usuario(nombre,apellido,telefono,correo,contrasena);
    registros.push(usuario);
    console.log(usuario);
    return registros;
}

// Funcion Ordenar Registro
function ordenarArreglo(arreglo){
    return arreglo.sort(function(a,b){
        var last1 = a.apellido.toUpperCase();
        var last2 = b.apellido.toUpperCase();
        if (last1 < last2){
            return-1;
        }
        if(last1 > last2){
            return 1; 
        }
        return 0;
    })
}
// Función Filtar Correo
function filtrarCorreo(arreglo){
    let filtro = "gmail.com";
    let filtroRegexp = RegExp(filtro);
    resultado = arreglo.filter(arreglo => filtroRegexp.test(arreglo.correo) === true);
    
    return resultado 
}

module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;
module.exports.ordenarArreglo=ordenarArreglo;
module.exports.filtrarCorreo= filtrarCorreo;