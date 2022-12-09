//Sentencia de control booleana, si la expresión dada es verdadera se ejecuta IF, de ser falsa se ejecuta ELSE

let condicion = true;

if (condicion) {
    console.log('Condición Verdadera');
} else {
    console.log('Condición Falsa');
}


//Es posible anidar if/else, si necesitamos poner mas condicionantes utilizamos if else

let numero = -3;

if (numero == 1) {
    console.log('Número 1');
} else if (numero == 2) {
    console.log('Número 2');
} else if (numero == 3) {
    console.log('Número 3');
} else if (numero == 4) {
    console.log('Número 4');
} else {
    console.log('Número desconocido');
}