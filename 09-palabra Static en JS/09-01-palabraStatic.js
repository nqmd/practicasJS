//Es posible agregar métodos que trabajen únicamente con una clase exclusivamente con la palabra static

class Persona {

    //Definiendo atributos estáticos a una clase
    static contadorDeObjetosPersona = 0; //Atributo de nuestra clase

    email = 'Valor default email'; //Atributo de nuestos objetos
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        //Valor contador de objetos creador a partir de la clase persona
        Persona.contadorDeObjetosPersona++;
        console.log('Se incrementa contador:' + Persona.contadorDeObjetosPersona);
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
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.toString());
console.log(empleado1.nombreCompleto());

Persona.saludar();
Persona.saludar2(persona1);


//All llamar al atributo estático desde el objeto se determinará como "undefined"
console.log(persona1.contadorDeObjetosPersona);
//Se debe llamar al atributo estático a partir de la clase
console.log(Persona.contadorDeObjetosPersona);
//Es posible heredaer los atributos estáticos de una clase padre a una clase hija
console.log(Empleado.contadorDeObjetosPersona);

//Es posible llamar un valor no estático fuera del constructor
console.log(persona1.email);
console.log(empleado1.email);
//El atributo no estático no se puede llamar apartir de una clase ya que no se ha definido directamente, siendo una variable nueva
console.log(Persona.email);
