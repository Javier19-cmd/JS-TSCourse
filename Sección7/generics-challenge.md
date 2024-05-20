# Challenge: Generics

Crea una función usando genéricos que acorte los strings en un objeto, incluyendo strings en objetos y arreglos anidados.

Indicaciones:

- Usa el método `trim()` para acortar los strings.
- Usa el método `map()` para acortar los strings en arreglos.
- Itera sobre las propiedades de los objetos para acortar los strings en objetos.
- Usa el operador `typeof` para determinar el tipo del valor.
- Usa el método `Array.isArray()` para determinar si el valor es un arreglo.
- Usa afirmaciones de tipos para decirle al compilador el tipo de objeto que se retorna. (type assertions `as T`)
- Si el valor es un objeto o un arreglo, invoca la función recursivamente en las propiedades del objeto para asegurarse de que todos los strings estén acortados.

Explicación: Al invocar la función recursivamente, somos capaces de manejar objetos y arreglos que están anidados dentro del objeto. De esta manera, todos los strings, independientemente de su profundidad, serán acortados.

La función debe retornar un objeto con todos los strings acortados, incluyendo strings en objetos y arreglos anidados.

```ts
function trimStrings(obj: any): any {
  // ...
}

const obj = {
  name: "  John  ",
  age: 30,
  address: {
    street: "  Main St  ",
    city: "  New York  ",
  },
  hobbies: ["  Reading  ", "  Writing  "],
};

const trimmedObj = trimStrings(obj);
/* 
{
  name: "John",
  age: 30,
  address: {
    street: "Main St",
    city: "New York",
  },
  hobbies: ["Reading", "Writing"],
}
*/
```
