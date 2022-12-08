let a = 3, b = 2, c = "3";

//Operador de igualdad - Se revisa el valor sin importar el tipo
let z = a == b;
console.log(z);
z = a == c;
console.log(z);

//Operador de igualdad estricta - Se revisa el valor y el tipo sean iguales
z = a === c;
console.log(z);


//Operador Distinto A - Se revisa el valor sin importar el tipo
z = a != b;
console.log(z);
z = a != c;
console.log(z);

//Operador Distinto A estricta - Se revisa el valor y el tipo sean iguales
z = a !== c;
console.log(z);