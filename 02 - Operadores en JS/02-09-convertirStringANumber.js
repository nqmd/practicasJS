//Utilizamos la funcion Number() para convertir string a número

let miNumero = '18';

let edad = Number(miNumero);
console.log(typeof edad);   

//Solución co IfElse
if (edad >= 18) {
    console.log('Puede votar');
} else {
    console.log('No puede votar');
}

//Solución con operador ternario
let votar = edad >= 18 ? 'Puede Votar' : 'No puede votar';
console.log(votar);