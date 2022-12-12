//Una clase es una plantilla para la creación de objetos en donde debemos anidar constructores
//No se aplica un hoisting aquí ya que es necesario declarar la clase antes de poder utilizarla

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara')
console.log(persona2);