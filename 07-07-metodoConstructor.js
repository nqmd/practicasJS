//Función especializada para trabajar con objetos
//Los constructores comienzan su nombre normalmente con mayúscula

//Función constructor de objetos de tipo Persona
//Le asignamos parametros al inicio con los que va a trabajar internamente - es buena practica llamarlos del mismo modo
function Persona(nombre, apellido, email) {
    this.nombre =  nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}


//Al tener un constructor creado podemos agregar objetos que funcionen con esos mismos parámetros como plantilla
//Cuando inicialicemos un objeto de constructor utilizamos la palabra reservada new
//Los valores no se comparten entre objetos, es necesario asignarles a cada uno su información
let padre = new Persona('Juan', 'Pérez', 'jperez@mail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre.nombreCompleto());

//Al realizar cambios en un objeto se aplica únicamente al objeto en cuestión y sin afectar a los otros, independientemente de que tengan el mismo constructor 
padre.nombre = 'Carlos';
console.log(padre);
console.log(madre);

//Otras opciones para crear objetos - se recomienda hacerlo de forma simplificada
let miObjeto = new Object;
let miObjeto2 = {};

//String
let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

//Dato numérico
let miNumero = new Number(1);
let miNumero2 = 1;

//Dato Booleano
let miBoolean = new Boolean(false);
let miBoolean2 = false;

//Array
let miArreglo1 = new Array();
let miArreglo2 = []

//Funciones
let miFuncion = new Function();
let mifuncion2 = function() {};