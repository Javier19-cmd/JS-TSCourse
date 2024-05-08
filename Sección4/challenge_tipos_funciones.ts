/*
Crear una función anónima (lengthOfString) que reciba un literal (string) y devuelva su longitud. 

Test cases: 
- "Hola" -> 4
- "Hola mundo" -> 10

*/

const lengthOfString = function (str: string) : number {
    return str.length;
}

console.log(lengthOfString("Hola")); // returns 4

/*
Crear una función flecha (max) que tome dos números como argumentos y devuelva el número mayor.

Test cases: 
- 5, 10 -> 10
- 10, 5 -> 10

*/
const max = (a: number, b: number) : number => a > b ? a : b;

console.log(max(5, 10)); // returns 10

/*
Crear una función regular (isEven) que tome un número y devuelva verdadero si el número es par y falso si es impar.

Test cases:
- 2 -> true
- 3 -> false
*/

function isEven(num: number) : boolean {
    return num % 2 === 0;
}

console.log(isEven(2)); // returns true


/*
Crear una función flecha (double) que tome un número y devuelva el resultado del número multiplicado por 2, a menos que el número sea 0, en cuyo caso devolverá 0.

Test cases:
- 2 -> 4
- 0 -> 0
*/

const double = (num: number) : number => num === 0 ? 0 : num * 2;
console.log(double(2)); // returns 4