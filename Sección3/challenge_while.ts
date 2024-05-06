// CHALLEBGE

/*
1. Escribir un programa que utilice un bucle while para impirmir los números del 1 al 10.
El bucle debería parar cuando el número sea 9.
*/

let i = 1;
while (i < 10) {
    console.log(i);
    i++;
}


/*

2. Escribir un programa que use el bucle while para imprimir los números del 2 al 10.
Dentro del bucle use la sentencia continue para saltar la impresión del número 4.

*/

let j = 2;
while (j <= 10) {
    if (j === 4) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}