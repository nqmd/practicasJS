//Al usar GET y SET se acostumbra poner los nombres de las propiedades con un guión bajo al inicio

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
persona1.nombre = 'Juan Carlos'; //set nombre('Juan Carlos')
console.log(persona1.nombre)