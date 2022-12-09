//La lista de variables que va a recibir una función dentro de un paréntesis se llaman parámetros, en el siguiente ejemplo los parámetros serían (a,b)
//Utilizamos arguments[] para recorrer los parametros de una función
let sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

//Por otro lado, los argumentos son los valores que le damos a la función después de ser declarada, en el siguiente ejemplo los argumentos serían (1,2)
let resultado = sumar(1,2);
console.log(resultado);



