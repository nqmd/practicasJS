let a = 3, b = 2,c = 1, d = 4;

//Las expresiones el JS se evalúan de izquierda a derecha - En el siguiente ejemplo se multiplica a por b y el valor se le asigna a z

let z = a * b;
console.log(z);

//En este ejemplo primero se realiza la multiplicación (3 * 2) y posteriormente la suma (6 + 1)
z = a * b + c;
console.log(z);

//En este ejemplo el resultado es 7 ya que la multiplicación tiene una jerarquia mayor que la suma
z = c + a * b;
console.log(z);

//En este ejemplo primero se realiza la multiplicación (3 * 2), posteriormente la división (1 / 4) y finalmente se suman los dos resultados ( 6 + 0.25)
z = a * b + c / d;
console.log(z);

//En este ejemplo el resultado es 2.5 ya que primero se realiza la multiplicación (3 * 2), después de divide ese reslutado entre d (6 / 4) y finalmente se suma c (1.5 + 1)
z = c + a * b / d;
console.log(z);

//En este ejemplo el resultado es8 ya que el paréntesis tiene mayor jerarquía, por ende, se realiza la suma, posteriormente la multiplicación y finalmente la división
z = (c + a) * b / c;
console.log(z);