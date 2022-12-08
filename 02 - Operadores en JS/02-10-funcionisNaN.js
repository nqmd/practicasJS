//NaN significa Not a Number - Este valor se da cuando un valor no puede cambiarse a número
let miNumero = '18';

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
     console.log('No es un número')
} else {
    if (edad >= 18) {
        console.log('Puede votar');
    } else {
        console.log('No puede votar');
    }
}

//Con operador Ternario

if (isNaN(edad)) {
    console.log('No es un número')
} else {
    let votar = edad >= 18 ? 'Puede Votar' : 'No puede votar';
    console.log(votar);
}