/* 

Challenge: Recreando el set

Crear una clase usando genéricos que recree el comportamiento de un Set. La clase debe llamarse MySet y debe tener los sigueintes métodos:

1. add: Agrega un elemento al set -> booleano si se agregó o no.
2. remove: Elimina un elemento del set -> booleano si se eliminó o no.
3. contains: Verifica si un elemento está en el set -> booleano.
4. size: Regresa el número de elementos en el set -> número.
5. get: Regresa un arreglo con todos los elementos del set -> arreglo. (copiado, no el original)

*/

class MySet<T> {
    private items: Map<T, T>;
  
    constructor() {
      this.items = new Map<T, T>();
    }
  
    add(element: T): boolean {
      if (!this.items.has(element)) {
        this.items.set(element, element);
        return true;
      }
      return false;
    }
  
    remove(element: T): boolean {
      return this.items.delete(element);
    }
  
    contains(element: T): boolean {
      return this.items.has(element);
    }
  
    size(): number {
      return this.items.size;
    }
  
    get(): T[] {
      return Array.from(this.items.values());
    }
  }
  
  // Pruebas
  const set = new MySet<number>();
  
  console.log("\nADD")
  console.log(set.add(1));  // Debería mostrar true
  console.log(set.add(1));  // Debería mostrar false
  console.log(set.add(2));  // Debería mostrar true
  
  console.log("\nCONTAINS")
  console.log(set.contains(1));  // Debería mostrar true
  console.log(set.contains(3));  // Debería mostrar false

  console.log("\nSIZE")
  console.log(set.size());  // Debería mostrar 2
  
  console.log("\nREMOVE")
  console.log(set.remove(1));  // Debería mostrar true
  console.log(set.remove(3));  // Debería mostrar false
  
  console.log("\nSIZE")
  console.log(set.size());  // Debería mostrar 1
  
    console.log("\nGET")
  console.log(set.get());  // Debería mostrar [2]
  