//Paso por valor es cuando utilizamos tipos que no son objetos como números o booleanos

//Tipos primitivos
let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);
console.log(x);
//console.log(a); dará como resultado que a no fue definida ya que le dimos el valor de un dato primitivo


//Paso por Referencia
//Es necesario crear un objeto

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
