//Un arreglo es un objeto que permite almacenar varios valores

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);


//Cómo recorrer los elementos de un array o arreglo

//Utilizando la posición del array
console.log(autos[0]);

//Utilizando un ciclo FOR
for(let i = 0; i < autos.length; i++) {
console.log((i) + ' ' + autos[i]);
}


//Modificar valores de un array
autos[1] = 'MercedezBenz';
console.log(autos[1]);
console.log(autos.length);

//Agregar valores a un array
//Función push() agrega un elemento al final del arreglo, es posible agregar uno o varios elementos en un solo uso de push
autos.push('Audi', 'Ferrari');
console.log(autos);
console.log(autos.length);

//Función push.apply() permite agregar un array dentro de otro array agregando los arrays a unir como parametros de la función
const autos2 = ['Mazzerati', 'Ford', 'Honda'];
autos.push.apply(autos, autos2);
console.log(autos);
console.log(autos.length);

//Función unshift() agrega un elemento al inicio del array
autos.unshift("Toyota");
console.log(autos);
console.log(autos.length);



//Eliminar valores de un array
//Función pop() elimina el elemento al final del arreglo
autos.pop();
console.log(autos);
console.log(autos.length);

//Función shift() elimina el primer elemento de un arreglo
autos.shift();
console.log(autos);
console.log(autos.length);

//Propiedad delete permite eliminar un elemento específico de un array sin afectar al tamaño del mismo
delete autos[2]
console.log(autos);
console.log(autos.length);

//Función slice() permite segmentar un array dado y crear uno nuevo
autos3 = autos.slice(0,3);
autos4 = autos.slice(4,7);
console.log(autos3);
console.log(autos3.length)
console.log(autos4);
console.log(autos4.length)


//Preguntar si es un arreglo
//Al preguntar con typeof no nos indica con presición si es un arreglo, en su lugar lo considera un objeto
console.log(typeof autos);

//En su lugar podemos utilizar la función o método isArray() al objeto Array
console.log(Array.isArray(autos));

//Utilizando la palabra reservada instanceof que fuciona del mismo modo que typeof solo que de forma booleana
console.log(autos instanceof Array);