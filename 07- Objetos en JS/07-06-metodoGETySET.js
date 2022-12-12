let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido
    }
}

//Get nos permite acceder a las funciones dentro de un objeto de forma que el programa la lea como propiedad antes que como una función
//Para utilizarla es necesario utilizar la palabra reservada get seguida del nombre de la función con sus parentesis y abrir llaves posteriormente:     -- get miFuncion() {}

console.log(persona.lang);

//El método set se usa para modificar los atributos de un objeto y dar un estandar de los datos

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);