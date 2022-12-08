/*
            OPERADORES ARITMÉTICOS

            +       Adición
            -       Sustracción
            '*'       Multiplicación
            **      Exponente (ES2016)
            /       División
            %       Módulo (Residuo de división)
            ++      Incremento
            --      Decremento
*/

//Adición ( + )
let a = 3, b = 2;
let z =  a + b;
console.log('Resultado de la suma: ' + z);

//Sustracción ( - )
z = a - b;
console.log('Resultado de la resta: ' + z);

//Multiplicación ( * )
z = a * b;
console.log('Resultado de la multiplicación: ' + z);

//Divición ( / )
z = a / b;
console.log('Resultado de la divición: ' + z);

//Residuo ( % )
z = a % b;
console.log('Residuo de la divición: ' + z);

//Exponente ( ** )
z = a ** b;
console.log('Resultado de operador exponente: ' + z);

//Incremento ( ++ )
z = a + b;
console.log(a);
console.log(b);
console.log(z);
//Pre-incremento - símbolo ++ antes de la variable
z = ++a;
console.log(a); //Se realiza el incrementeo a la variable "a" y posteriormente se le asigna el mismo valor a "z"
console.log(z);
//Post-incremento - símbolo ++ después de la variable
z = b++;
console.log(b); //Se realiza el incremento a la variable "b" después de ser asignada a la variable z, es por eso que al mostrar en consola a "z" nos da el valor original y al mostrar "b" nos da el valor aumentado
console.log(z);

//Decremento ( -- )
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(b);
console.log(z);


