//Las funciones flecha son similares a las funciones de tipo expresión

//Declaración de Función tipo Expresión
let sumar = function (a,b) {return a + b};
let resultado = sumar(1,2);
console.log(resultado);

//Declaración de Función Flecha
//Es recomendable declararlas como constantes
//Para declararla se genera una constante, posteriormente se le asignan los parametros seguidos de = y el cuerpo de la función ira después de una flecha => en vez de llaves {}
//No utilizamos function

const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);