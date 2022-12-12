//La diferencia entre una variable con datos primitivos a un objeto es que un dato primitivo no tiene propiedades ni métodos

let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@gmail.com',
    edad: 28
}

//Los valores agregados pueden ser cualquiera de tipo primitivo, no necesariamente cadenas de texto únicamente
//Podemos acceder a un atributo en específico llamando al objeto seguido de un punto y el nombre del atributo.

console.log(persona.nombre);
console.log(typeof persona.nombre);
console.log(persona.edad);
console.log(typeof persona.edad);

//De esta manera podemos observar el  contenido del objeto directo de consola
console.log(persona);

