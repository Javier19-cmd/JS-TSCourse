const x = (function (): string {
    console.log('Hola');

    return 'Hola';

})();

console.log(x);

// IIFE -> inmediately invoked function expression

(function () {
    console.log('IIFE');
})();

const flecha = (() => {
    console.log('Flecha');
})();

console.log(flecha);