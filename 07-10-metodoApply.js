//Método Apply permite realizar las mismas aciones que Call
//Apply nos permite llamar un método a un objeto que no tenga definido métodos
//Opera del mismo modo que el método call, sin embargo, al utilizarlo es necesario es necesario definir un arreglo que contenga los parámetros a utilizar

let persona1 = {
    nombre: 'Juan',
    apellido: ' Pérez',
    //Se definen los parámetros del mismo modo que call
    nombreCompleto: function(titulo, tel) {
        return titulo + this.nombre + ' ' + this.apellido + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona1.nombreCompleto('Lic. ', '22334455'));
//Se declara un arreglo con los datos a agregar
let arreglo = ['Ing. ', '5533224455']
//Se agrega el arreglo como un parametro dentro de apply()
console.log(persona1.nombreCompleto.apply(persona2, arreglo));