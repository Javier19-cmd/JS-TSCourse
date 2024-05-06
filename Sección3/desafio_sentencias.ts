/*
1. Escribe un programa que verifieque si un número es menor que 5, imprime "Es demasiado pequeño"
en la consola. Si el número es mayor que 5, imprime "el número es demasiado grande" en la consola. Si el número es igual a 5, imprime "El número es correcto"
en la consola.
*/

/*
2. Escribe un programa que verifique si un número es par o impar, imprime "el número es par" en la consola si es par, de lo contrario imprime "el número es impar" en la consola.
*/


// Challenge 1. 
const numero = 5;
if (numero < 5) {
    console.log("Es demasiado pequeño");
}else if (numero > 5) {
    console.log("El número es demasiado grande");
}
else {
    console.log("El número es correcto");
}

// Challenge 2.
const numero2 = 6;
if (numero2 % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar");
}