// Encapsulación
class DataStorage<T> {
    private data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    add(item: T):void {
        this.data.push(item);
    }

    remove(item: T):void {
        this.data = this.data.filter(i => i !== item);
    }

    get():T[] {
        return [...this.data];
    }
}

console.log("Tipos genéricos aplicados")

const textStorage = new DataStorage<string | number>(['Item1', 'Item2', 'Item3']);
textStorage.add('Item4');

console.log(textStorage.get());