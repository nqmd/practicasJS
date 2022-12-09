//La palabra reservada return nos permite retornar el dato con el que se realizó el cálculo en una función

function miFuncion(a,b) {
    return a + b;
 }
 let resultado = miFuncion(2,3);
 console.log(resultado);

 //Podemos definir una función declarada en una variable (De tipo expresión)
 let x = function (a,b) {return a + b};

 //Mandamos a llamar la variable que contiene una función, así agregamos parámetros
 resultado = x(1,2);
 console.log(resultado);
