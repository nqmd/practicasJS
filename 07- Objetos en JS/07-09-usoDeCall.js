//El método call nos va a permitir traer un método de un objeto a otro

let persona1 = {
    nombre: 'Juan',
    apellido: ' Pérez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el método persona1.nombreCompleto con los datos de persona2
//Es posible agregar parámetros a la función que llamemos con el método call() para agregar datos
console.log(persona1.nombreCompleto('Lic', '55443322'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '22334455'));