// CHALLENGE

/*

1. While Loop: 

Escribir un programa que imprima los números del 1 al 100. Pero paa los múltiplos 
de tres imprime "Fizz" en lugar del número y para los múltiplos de cinco imprime "Buzz".
Para los números que son múltiplos de tres y cinco imprime "FizzBuzz".

-> divisible por 3 ? Fizz
-> divisible por 5 ? Buzz
-> divisible por 3 y 5 ? FizzBuzz
-> ninguno de los anteriores ? número

*/

console.log('1. While Loop: ');
let i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    i++;
    
}

/*

2. For loop y operador ternario (iterary operator)

*/

console.log('2. For loop y operador ternario (iterary operator): ');
for (let i = 1; i <= 100; i++) {
    (i % 3 === 0 && i % 5 === 0) ? console.log('FizzBuzz') :
    (i % 3 === 0) ? console.log('Fizz') :
    (i % 5 === 0) ? console.log('Buzz') :
    console.log(i);
}