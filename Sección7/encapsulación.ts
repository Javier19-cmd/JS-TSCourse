class _DataStorage {
    public data: string[];

    constructor(data: string[]) {
        this.data = data;
    }

    addItem(item: string):void {
        this.data.push(item);
    }

    removeItem(item: string):void {
        this.data = this.data.filter(i => i !== item);
    }

    getItems():string[] {
        return [...this.data];
    }
}

const dataStorage = new _DataStorage(['Item1', 'Item2', 'Item3']);
dataStorage.addItem('Item4');

const data = dataStorage.getItems();
console.log(data);

// Encapsulación
class DataStorage {
    private data: string[];

    constructor(data: string[]) {
        this.data = data;
    }

    addItem(item: string):void {
        this.data.push(item);
    }

    removeItem(item: string):void {
        this.data = this.data.filter(i => i !== item);
    }

    getItems():string[] {
        return [...this.data];
    }
}

console.log("Encapsulación aplicada")

const dataStorage2 = new DataStorage(['Item1', 'Item2', 'Item3']);
dataStorage2.addItem('Item4');

const data2 = dataStorage2.getItems();
console.log(data2);