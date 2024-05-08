// Cláusulas de guarda
// Las cláusulas de guarda son una característica de TypeScript que nos permite restringir el tipo de una variable en función de una condición. Para ello, se utilizan las palabras clave is y typeof. A continuación, se muestra un ejemplo de cómo se pueden utilizar las cláusulas de guarda en TypeScript:
//
function restar (a: number, b: number): number | undefined {
    // typeof -> darnos el tipo de dato como un string

    if (typeof a !== 'number' || typeof b !== 'number') return

    if (a < b) return

    return a - b
}

const resultado = restar(3, 3)

if (resultado !== undefined) {
    console.log(resultado)
} else {
    console.log('No se puede restar')
}