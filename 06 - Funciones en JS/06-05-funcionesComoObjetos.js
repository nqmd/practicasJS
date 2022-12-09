//Una función también puede ser descrita como objetos, teniendo propiedades y métodos
function miFuncion(a,b) {
    //La propiedad arguments.length nos permite saber cuántos argumentos se definieron en nuestra función. Solo puede ser usada dentro de la función
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2,3);
console.log(typeof miFuncion);
console.log(resultado);

//La función toString() nos permite asignar como texto a nuestra función dentro de una variable
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


