//Las funciones son un pedazo de código que podremos reutilizar en diferentes partes del programa

miFuncion(4,2);
//Declaración de la función
//Al declarar la función agregamos en sus argumentos/parametros los datos que utiilzaremos
function miFuncion(a,b) {
    console.log('Suma: ' + (a + b));
}

//Al inicializarse podemos agregar los datos que queramos indicar a las variables
//El llamado de la función puede ser antes o después de ser declarada - Hoisting
miFuncion(2,3);