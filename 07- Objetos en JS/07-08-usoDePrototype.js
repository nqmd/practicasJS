//La palabra reservada prototype permite agregar elementos a objetos creados a partir de un constructor sin tener que hacerlo uno a uno

function Persona(nombre, apellido, email) {
    this.nombre =  nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Uso de prototype para agregar un teléfono al constructor
Persona.prototype.tel = '44332211';

//Una vez agregada la propiedad con prototype al constructor, es posible editarlo individualmente a cada objeto
let padre = new Persona('Juan', 'Pérez', 'jperez@mail.com');
padre.tel = '11223344';
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre.tel);