// Escribir una función genérica mergeObjects que tome como argumentos dos objetos de distinto tipo y devuelva un nuevo objecto que combine sus propiedades.

/*

Ejemplo: 

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {d: 4, e: 5, f: 6};

const mergedObj = mergeObjects(obj1, obj2);

mergedObj // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

*/

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  // Ejemplo de uso
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { d: 4, e: 5, f: 6 };
  
  const mergedObj = mergeObjects(obj1, obj2);
  
  console.log(mergedObj); // Output: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}  