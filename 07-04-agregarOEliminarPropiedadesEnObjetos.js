let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido
    }
}

//Para agregar propiedades se declara de este modo:         objeto.propiedadPorAgregar = dato
//Es importante revisar la correcta escritura al agregar o modificar propiedades
persona.tel = '5566442244';
console.log(persona);
console.log(persona.tel);
//Para modificar el valor de una propiedad realizamos el mismo proceso dinámico y agregamos la información necesaria
persona.tel = '221344356';
console.log(persona.tel);

//Para eliminar una propiedad se usa la palabra reserbada delete seguida de objeto.propiedad
delete persona.tel;
console.log(persona)