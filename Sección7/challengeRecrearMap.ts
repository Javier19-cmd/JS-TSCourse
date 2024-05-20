/*

Challenge recrear Map en TypeScript

Crear una clase usando genéricos K, V que recree el comportamiento de un Map. La clase debe llamarse MyMap y debe tener los sigueintes métodos:

- has(key: K): boolean: devuelve true si la clave está en el mapa, false en caso contrario.
- set(key: K, value: V): void: agrega un par clave-valor al mapa. Si la clave ya existe, actualiza su valor.
- get(key: K): V | undefined: devuelve el valor asociado a la clave, o undefined si la clave no está en el mapa.
- clear(): void: elimina todos los pares clave-valor del mapa.
- size(): number: devuelve el número de pares clave-valor en el mapa.
- keys(): K[]: devuelve un array con todas las claves del mapa.
- entries(): [K, V][]: devuelve un array con todos los pares clave-valor del mapa.

Sugerencias: 
- Se puede usar un array de tuples para almacenar los pares clave-valor.
- El método .some() se puede usar para comprobar si una array contiene un elemento que coincide con una cierta condición.
- El método .find() se puede usar para encontrar un elemento en un array que cumple una cierta condición.
- El método .map() se puede usar para crear una nueva array a partir de otra array existente.

*/

class MyMap<K, V> {
    private items: [K, V][];
  
    constructor() {
      this.items = [];
    }
  
    has(key: K): boolean {
      return this.items.some(([k, _]) => k === key);
    }
  
    set(key: K, value: V): void {
      const index = this.items.findIndex(([k, _]) => k === key);
      if (index !== -1) {
        this.items[index][1] = value;
      } else {
        this.items.push([key, value]);
      }
    }
  
    get(key: K): V | undefined {
      const item = this.items.find(([k, _]) => k === key);
      return item ? item[1] : undefined;
    }
  
    clear(): void {
      this.items = [];
    }
  
    size(): number {
      return this.items.length;
    }
  
    keys(): K[] {
      return this.items.map(([k, _]) => k);
    }
  
    entries(): [K, V][] {
      return this.items.slice();
    }
  }
  
  // Pruebas
  const myMap = new MyMap<string, number>();
  
  myMap.set("a", 1);
  myMap.set("b", 2);
  
  console.log("\nHAS")
  console.log(myMap.has("a")); // Debería mostrar true
  
  console.log("\nGET")
  console.log(myMap.get("a")); // Debería mostrar 1
  console.log(myMap.get("c")); // Debería mostrar undefined
  
  myMap.set("a", 3);

  console.log("\nGET")
  console.log(myMap.get("a")); // Debería mostrar 3
  
  console.log("\nSIZE")
  console.log(myMap.size()); // Debería mostrar 2

  console.log("\nKEYS")
  console.log(myMap.keys()); // Debería mostrar ["a", "b"]
  
  console.log("\nENTRIES")
  console.log(myMap.entries()); // Debería mostrar [["a", 3], ["b", 2]]
  
  myMap.clear();

  console.log("\nSIZE")
  console.log(myMap.size()); // Debería mostrar 0

  console.log("\nKEYS")
  console.log(myMap.keys()); // Debería mostrar []

  console.log("\nENTRIES")
  console.log(myMap.entries()); // Debería mostrar []
  