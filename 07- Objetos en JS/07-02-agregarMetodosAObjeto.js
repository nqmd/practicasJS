//Declaración de objeto
//Para acceder a datos estando dentro del objeto utilizamo el apuntador this

let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function() {        //Agregamos una función como valor dentro de una propiedad del objeto
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());

//Crear objeto con la palabra reservada new
//con las palabras reservadas new Object() crea un espacio en memoria para usar posteriormente
let persona2 = new Object();
//Para agregar parametros llamamos al objeto seguido de un punto y el atributo a declarar con sus valores
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = 334554298