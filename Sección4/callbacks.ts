// Callbacks

type Callback = (a: number, b: number) => number;

function operacion(a: number, b: number, callback: (result: number) => boolean) {
    return callback(a + b);
}

const suma : Callback = (a, b) => a + b;

function resta(a: number, b: number) {
    return a - b;
}

function multiplicacion(a: number, b: number) {
    return a * b;
}

const resultado = operacion(2, 3, (result: number) => result > 10);

console.log(resultado);
