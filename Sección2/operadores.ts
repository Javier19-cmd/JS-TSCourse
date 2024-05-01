// Aritméticos (+, -, *, /, %, **)
// Conctenación (+)

const x = 5;
const y = 3;

const suma = x + y;

console.log("Suma: ", suma);

const resta = x - y;
console.log("Resta: ", resta);

const multiplicacion = x * y;
console.log("Multiplicación", multiplicacion);

const division = x / y;
console.log("División: ", division);

const modulo = x % y;
console.log("Módulo: ", modulo);

const exponente = x ** y;
console.log("Exponente: ", exponente);

const concatenacion = "Hola " + "Mundo";
console.log("Concatenación: ", concatenacion);

const hola = "Hola";
const mundo = "Mundo";

console.log(`${hola} ${mundo}`);

// Unarios (+, -, !, typeof), void, delete)
// ! -> Negación

const negacion = !true;
console.log("Negación: ", negacion);

const negativo = -5;
console.log("Negativo: ", negativo);

const typeofX = typeof x;
console.log("Tipo de X: ", typeofX);

const mensaje = "Hola Mundo";
const resultado = void mensaje;
console.log("Resultado: ", resultado);

// NaN -> Not a Number
const noEsUnNumero = +"Hola";
console.log("No es un número: ", noEsUnNumero);

// Incremento (++) y Decremento (--)
let z = 5;
++z;
console.log("Incremento: ", z);

let w = 5;
w--;
console.log("Decremento: ", w);