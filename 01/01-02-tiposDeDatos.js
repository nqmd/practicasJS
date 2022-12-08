// --- Variables en JS no necesitan que se les defina el tipo de valor ---

// Strings - Los Strings o cadenas de texto se escriben entre comillas
var nombre = 'Carlos';
console.log(nombre);

//Las variables en JS son dinámicas, es decir que podemos reutilizarlas y cambiar el tipo de dato que contiene
nombre = 10;
console.log(nombre);

//Usamos "typeof" dentro de console.log() y antes del dato a mostrar en consola para saber qué tipo de dato eso
console.log(typeof nombre);


// Number - Los datos numéricos no llevan comillas, sin embargo, si llevan comillas se convierten en cadena de texto 
//También es posible guardar números flotantes (decimales)
var numero = 1000;
console.log(typeof numero);
console.log(numero);
var numero = "1000";
console.log(typeof numero);
console.log(numero);
var numero = 1000.5;
console.log(typeof numero);
console.log(numero);

// Object - conjunto de propiedades, se agrupan entre llaves {}
var objeto = {
    nombre : 'Juan',
    apellido : 'Pérez',
    telefono : '12345'
};
console.log(typeof objeto);
console.log(objeto);

//Boolean - Solo permite True/False || También se les conoce como bandera
var bandera = true;
console.log(typeof bandera);
console.log(bandera);

//Function - Permite realizar una tarea específica almacenada en una variable que puede ser reutilizada en un futuro.
//Estas, por su parte, se declaran con function y no con var. Además, el nombre debe terminar con paréntesis. Ejemplo: miFuncion()
function miFuncion() {}
console.log(miFuncion);

//Symbol - El dato que vamos a declarar en nuestra variable de tipo symbol debe ir escrito dentro de un Symbol().  Se usa para crear un valor único
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Clase - También se declara como una función y como un objeto pero se declara con "class" y no con "var"
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Undefined - Tipo de dato otorgado a las variables sin valor asignado, además es un tipo de dato posible de usar
//También es posible definirlo manualmente
var x;
console.log(x)
console.log(typeof x);

x = undefined;
console.log(x)
console.log(typeof x);

//Null - Ausencia de valor. Esta ausencia de valor es determinado por quien la declara, a diferencia de undefined que es solo una variable vacia
var y = null;
console.log(y);
console.log(typeof y);

//Arrays - Se declara como una variable normal pero los valores van dentro de corchetes [] || Pueden contener cualquier tipo de dato
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Es posible declarar una variable string vacía
var z = '';
console.log(z);
console.log(typeof z);