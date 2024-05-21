Escribe una función genérica `extractValues` que tome un objeto como argumento y devuelva un array con sus valores. La función debe utilizar los genéricos y el operador `keyof` para extraer los valores del objeto. No se puede utilizar `Object.values`.

Ejemplo:

```ts
const person = { name: "John", age: 30, location: "New York" };

const values = extractValues(person);

console.log(values);
// Output: ["John", 30, "New York"]
```

## Sugerencias:

- Utiliza `keyof` para extraer las llaves del objeto.
- Utiliza `extends` para asegurarte del tipo de dato que se está pasando como argumento.
- Utiliza `[]` para indicar que el tipo de dato que se está devolviendo es un array.
- Utiliza el acceso por índice para definir el tipo de dato que se está devolviendo.
- Puedes utilizar `for...in` para iterar sobre las propiedades del objeto.
