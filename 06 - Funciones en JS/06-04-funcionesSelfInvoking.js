//Las funciones Self Invoking sol aquellas que se mandan a llamar a sí mismas
//Deben escribirse dentro de un paréntesis y al terminar poner otros parentesis
//Estas funciones no pueden reutilizarse

(function (a,b) {
    console.log('Ejecutando función: ' + (a + b));
})(3,4);