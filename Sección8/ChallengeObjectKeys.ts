/*
CHALLENGE: Escriba una función genérica extractValues que tome un objeto como argumento y devuelva un array con sus valores. La función debe utilizar los genéricos y el operador keyof
para extraer los valores del objeto. No se puede utilizar Object.values.

Sugerencias: 
- Uitliza keyof para extraer las llaves del objeto.
- Utiliza extends para asegurarte del tipo de dato que se está pasando como argumento.
- Utiliza [] para indicar que el tipo de dato que se está devolviendo es un array.
- Utiliza el acceso por índices para definir el tipo de dato que se está devolviendo.
- Se puede utilizar for...in para iterar sobre las propiedades del objeto.

*/

function extractValues<T extends object>(obj: T): (T[keyof T])[] {
    const values: (T[keyof T])[] = [];
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    
    return values;
  }
  
  // Ejemplo de uso
  const ejemplo = {
    nombre: "Juan",
    edad: 30,
    activo: true,
  };
  
  const valores = extractValues(ejemplo);
  console.log(valores); // Output: ["Juan", 30, true]
  