/*

Crear una función usando genéricos que acorte los string en un objeto, incluyendo strings en objetos y arreglos anidados.

Indicaciones: 

1. Usar el método trim() para acortar los strings.
2. Usar el método map() para acortar los strings en arreglos.
3. Iterar sobre las propiedades de los objetos para acortar los strings en objetos.
4. Usar el operador typeof para determinar el tipo del valor.
5. Usar Array.isArray() para determinar si un valor es un arreglo.
6. Usar afirmaciones de tipos para decirle al compilador el tipo de objeto que se retorna. (type assetions as T)
7. Si el valor es un objeto o un arreglo, invocar la función recursivamente en las propiedades del objeto para asegurarse de que todos los strings sean acortados.

Explicación: Al invocar recursivamente, somos capaces de manejar objetos y arreglos que están anidados dentro del objeto. De esta manera, todos los strings, independientemente de su profundidad, son acortados.

*/

function trimStrings<T>(input: T): T {
    if (typeof input === 'string') {
      return input.trim() as any as T;
    } else if (Array.isArray(input)) {
      return input.map(item => trimStrings(item)) as any as T;
    } else if (typeof input === 'object' && input !== null) {
      const trimmedObject: any = {};
      for (const key in input) {
        if (input.hasOwnProperty(key)) {
          trimmedObject[key] = trimStrings((input as any)[key]);
        }
      }
      return trimmedObject as T;
    } else {
      return input;
    }
  }
  
  // Prueba con un objeto anidado y un arreglo
  const obj = {
    name: "  John Doe  ",
    details: {
      address: "  123 Main St  ",
      hobbies: ["  Reading  ", "  Traveling  "],
    },
    tags: ["  tag1  ", "  tag2  "],
  };
  
  const trimmedObj = trimStrings(obj);
  console.log(trimmedObj);
  