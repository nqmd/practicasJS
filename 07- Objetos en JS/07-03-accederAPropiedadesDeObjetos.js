//Declaración de objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Una forma de acceder a las propiedades es utilizando el nombreDelObjeto.propiedad

console.log(persona.nombre);


//AL igual que un arreglo es posible utilizar llames, a diferencia del primero aquí no se utiliza el número de posición si no la propiedad entre comillas

console.log(persona['apellido']);


//For in nos permite recorrer las propiedades de un objeto del mismo modo que For nos permite reocrrer un array

for(let nombrePropiedad in persona) {
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}