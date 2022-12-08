var nombre = 'Juan';
var apellido = 'Pérez';

//Al ser cadenas se le llama CONCATENACIÓN y sirve para juntar dos o más valores string
//Los valores por autonomacia aparecerán juntos, sin embargo podemos concatenar un espacio entre valor y valor
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

//Es posible agregar los valores a concatenar en una sola variable
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

//Los valores en JS se evalúan de izquierda a derecha, si concatenamos un string con un número el número será considerado un string
var x = nombre + 2 + 4;
console.log(x);

//Para respetar que los números sean considerados números y, en este caso, se sumen es necesario escribirlo entre paréntesis
x = nombre + (2 + 4);
console.log(x);

//Si la suma numérica va antes que el string se realiza la operación y se concatena el string posteriormente
x = 2 + 4 + nombre;
console.log(x);