// Block scoping
// ES6 -> let y const
// var

// var -> function scope
// Ejemplo: 
function foo() {
    if (true) {
        // Hoisting: sube las variables al inicio del scope.
        var x = 10;
    }
    console.log(x);
}

// let y const -> block scope
// Ejemplo:
function foo2() {
    if (true) {
        let y = 10;
    }
    console.log("");
}