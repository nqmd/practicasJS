/*
    Existen 3 formas de clarar una variable:
        Para variables dinámicas:    
            - var
            - let
        Para una variable constante:
            - const

    Actualmente es buena practica utilizar "let" antes que "var" para variables dinámicas

*/

//En JS es posible declarar variables sin utilizar las palabras reservadas "var" o "let", sin embargo no es una buena práctica
//Es recomendable que se use más "let" que "var"
//se le llama LITERAL al valor asignado a una variable, ya sea un valor numérico o de tipo string

nombre = 'Juan';    //Literal de tipo String
console.log(nombre);

//Un buena práctica seria iniciar declarando con la palabra reservada let, seguida del nombre de la palabra, el signo "=" y por últtimo el valor de la variable

let nombre2 = 'Juan';
console.log(nombre2);

//Variable constante (const) - No permite modificar su valor una vez declarada
const apellido = 'Perez';


/*
        --- Buenas prácticas para la declaración de Variables ---

        - Las variables dinámicas se declaran con "let"
        - Si el nombre de la variable tiene dos o más palabras se utiliza notación de altas y bajas, es decir, se inicializa en minúscula y a partir de la segunda palabra se comienza con mayuscula. Ejemplo: 
*/

        let nombreCompleto = 'Juan Pérez';
        console.log(nombreCompleto);

/*
        -Es posible declarar variables en una sola línea
        -También podemos asignar valores a más de una variable en una sola línea
        -Con respecto a lo anterior, podemos declarar variables undefined en una línea y en la siguiente asignarles valores o, por otro lado, hacer las dos cosas en la misma línea
        -Podemos sumar el contenido de más de una variable en una variable única
*/

        let x,y;
        x = 10, y = 20;
        z = x + y;
        console.log(z);

        let a = 10, b = 20;
        c = a + b;
        console.log(c);

        /*
        --- Reglas para definir nombres de variables ---

        - JS es key sensitive, es decir, diferencía entre minúsculas y mayúsculas y es posible declarar variables con el mismo nombre siempre y cuando se diferencíen por esta característica con diferentes tipos de dato
        -Una variable NO puede iniciar con números, en su lugar podemos utilizar antes guión bajo '_' o signo de dolar '$' o una letra para después utilzar números
        - Una variable NO puede ser declarada con el nombre de alguna palabra reservada, sin embargo, podemos usarlas si las declaramos con los signos de inicio anteriores descritos o diferenciandolas de algun otro modo
*/

        let nombrecompleto1 = 'Juan Pérez';
        let nombreCompleto1 = 'Carlos Lara';
        console.log(nombrecompleto1);
        console.log(nombreCompleto1);

        //Declarando variables con caracteres especiales permitidos seguidos de numero
        let _1nombrecompleto;
        let $1nombrecompleto;
        let a1nombrecompleto;
        console.log(_1nombrecompleto);
        console.log($1nombrecompleto);
        console.log(a1nombrecompleto);

        //Declarando variables con palabras reservadas diferenciadas
        let _if;
        let $if;
        let if1;
        console.log(_if);
        console.log($if);
        console.log(if1);
