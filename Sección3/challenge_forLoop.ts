// CHALLENGE

/*

1. Imprimir todos los números del 1 al 10 usando un for loop.

*/
console.log('1. Imprimir todos los números del 1 al 10 usando un for loop.');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*

2. Imprimir todos los números pares del 1 al 20 usando un for loop.

*/

console.log('2. Imprimir todos los números pares del 1 al 20 usando un for loop.');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* 

3. Imprimir la suma de todos los números del 1 al 100 usando un for loop.

*/
console.log('3. Imprimir la suma de todos los números del 1 al 100 usando un for loop.');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}