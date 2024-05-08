// Función anóniuma
const z = function () : number {
    return 10;
}
z();

const y : number = 5;

// Función flecha.
const x = (a: number, b: number) : number => a + b;

const a = (a: number) => void = (a) => z();

console.log(x(2, 3)); // returns 5

if (1 > 2) console.log('1 es mayor que 2');

a(2, 3); // returns 5