/*
Challenge 1: 

Crear una función llamada calculateAvergae (calcularPromedio) que tome dos números y devuelva la media de esos dos números.

*/

function calculateAverage(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

calculateAverage(10, 20); // returns 15
console.log(calculateAverage(10, 20)); // returns 15

/*
Challenge 2: 

Crea una función llamda addStrings (añadirStrings) que tome dos cadenas (strings) y devuelva la cadena concatenada de esos dos strings.

*/

function addStrings(str1: string, str2: string): string {
    return str1 + str2;
}

addStrings('Hello', 'World'); // returns 'HelloWorld'

console.log(addStrings('Hello', 'World')); // returns 'HelloWorld'

/*
Challenge 3:
Crear una función llamada square (cuadrado) que tome un número como parámetro y devuelva el cuadrado de ese número.

*/

function square(num: number): number {
    return num * num;
}

square(5); // returns 25
console.log(square(5)); // returns 25

/*
Challenge 4
Crear una función llamda sumOfSquares (sumaDeCuadrados) que tome dos números y devuelva la suma de los cuadrados de esos dos números.
*/
function sumOfSquares(num1: number, num2: number): number {
    return square(num1) + square(num2);
}

sumOfSquares(3, 4); // returns 25
console.log(sumOfSquares(3, 4)); // returns 25