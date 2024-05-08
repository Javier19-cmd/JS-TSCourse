function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3));

// Retorno de funciones void
function printMessage(message: string): void {
    console.log(message);
}

printMessage('Hola Mundo!');

// Retorno de funciones undefined
function printMessage2(message: string): undefined {
    console.log(message);
    return undefined;
}

printMessage2('Hola Mundo!');

// Retorno de funciones any
function printMessage3(message: string): any {
    console.log(message);
    return 1;
}

printMessage3('Hola Mundo!');

// Retorno de funciones never
function throwError(message: string): never {
    throw new Error(message);
}

throwError('Error!');

// Retorno de funciones unknown
function printMessage4(message: string): unknown {
    console.log(message);
    return 1;
}

printMessage4('Hola Mundo!');

// Retorno de funciones object
function createObject(): object {
    return {};
}

// Retorno de funciones string
function createMessage(): string {
    return 'Hola Mundo!';
}

console.log(createMessage());

// Retorno de funciones boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(2));