class Persona {

    static contadorPersona = 0; //Atributo de nuestra clase

    static get MAX_OBJ() {
        return 5
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;  //Se realiza un pre incremento
        } else {
            console.log('Se han superado el máximo de objetos permitidos');   
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el método de la clase Padre (Object)
    toString() {
        return this.nombreCompleto();
    }
    //Se declara el método estático para esta clase - Es importante decir que no va a poder utilizarse con los objetos
    static saludar() {
        console.log('Hola');
    }
    //Sí es posible poner un objeto como parámetro al método static
    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

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
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
let persona2 = new Persona('Karla', 'Ramirez');
let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());

console.log(Persona.contadorPersona)
console.log(Persona.contadorPersona)

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);