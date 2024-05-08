// CHALLENGE

/*
1. Escribir una función principal llamada primeraFuncion que reciba num1 y num2 como parámetros.

2. Dentro de la función principal, retornar una función anónima que use ambos parámetros de la función principal para retornar la suma de ambos.

Definir los tipos de datos de los parámetros, de las declaraciones, y lo que se está retornando en ambas funciones.

Asignar cada invocación de funciones a una variable. Enseñar el resultado final en consola.
*/


type Funciones = (num1: number, num2: number) => () => number;

// Definiendo la función principal primeraFuncion con los tipos de datos adecuados para los parámetros
function primeraFuncion: Funciones = (num1, num2) =>{
    // Dentro de la función principal, retornar una función anónima que sume los dos parámetros
    return (): number {
        return num1 + num2;
    };
}

// Asignando la invocación de la función principal a una variable
const sumaFunction = primeraFuncion(3, 5);

// Invocando la función retornada y mostrar el resultado en la consola
console.log(sumaFunction()); // Debería imprimir 8


// type [name] = [type];

// pascal case
// PrimeraFuncion

type X = number;
const x : X = "";


type Uniones = string | number;
const uniones: Uniones = 2;