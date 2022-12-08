// El operador AND se determina con &&

let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log('Dentro de rango');
} else {
    console.log('Fuera de rango');
}



//El operador OR se determina con ||

let vacaciones = false, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log('Puede asistir');
} else {
    console.log('Está ocupado');
}



//El operador ternario - Genera una expresión en tres partes, la primera es una expresión booleana quue revisa si es true o false, dato que se almacena en la variable. Posteriormente se declara un ? que nos dará las opciones que serían resultado separadas por :

//En este caso, al 3 ser mayor que 2 nos da de resultado verdadero, sin embargo es posible poner cualquier otro tipo de datos

let resultado = 3 > 2 ?  "Verdadero" : "falso";
console.log(resultado);

let numero = 9; 
resultado = numero % 2 == 0 ? "Es un número par" : "Es un número impar";
console.log(resultado)