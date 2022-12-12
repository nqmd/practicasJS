let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido
    }
}

//Existen diferentes formas de imprimir los objetos al trabajar en navegador web

//Concatenar cada valor de cada propiedad:
console.log(persona.nombre, persona.apellido,persona.email,persona.edad)

//For in
for(nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Object.Values

let personaArray = Object.values(persona);
console.log(personaArray);

//JSON.stringift - Convierte objeto en una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);