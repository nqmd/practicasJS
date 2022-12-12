//Se declara una clase - Clase padre
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
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = this.apellido
    }
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //Llamamos el constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = this. departamento;
    }

    //Sobreescritura - Modificar el comportamiendo de un método en la clase padre
    //Se utiliza exactamente el mismo nombre y parámetros de la clase padre
    nombreCompleto() {
        //Con la palabra reservada super podemos retomar atributos de la clase padre
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto())