// CHALLENGE

/*
1. Escribir una función principal llamada primeraFuncion que reciba num1 y num2 como parámetros.

2. Dentro de la función principal, retornar una función anónima que use ambos parámetros de la función principal para retornar la suma de ambos.

Definir los tipos de datos de los parámetros, de las declaraciones, y lo que se está retornando en ambas funciones.

Asignar cada invocación de funciones a una variable. Enseñar el resultado final en consola.
*/

// Definir la función principal primeraFuncion con los tipos de datos adecuados para los parámetros
function primeraFuncion(num1: number, num2: number): () => number {
    // Dentro de la función principal, retornar una función anónima que sume los dos parámetros
    return function(): number {
        return num1 + num2;
    };
}

// Asignar la invocación de la función principal a una variable
const sumaFunction = primeraFuncion(3, 5);

// Invocar la función retornada y mostrar el resultado en la consola
console.log(sumaFunction()); // Debería imprimir 8
