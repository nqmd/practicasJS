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
    //Sobreescribiendo el método de la clase Padre (Object)
    toString() {
        //Polimorfismo
        return this.nombreCompleto();
    }
}
//La clase Object es la clase universal de todas las clases en un programa JS



class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); 
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = this. departamento;
    }

    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.toString());
console.log(empleado1.nombreCompleto())
