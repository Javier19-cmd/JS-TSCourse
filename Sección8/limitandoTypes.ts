// extends
function extractValues<T extends object>(a: T): T{
    return a;
}

const resultado = extractValues("Ariel");

console.log(resultado);