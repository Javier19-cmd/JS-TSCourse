class Product {
    price: number;
    id: number;

    constructor(price: number, id: number){
        this.price = price;
        this.id = id; 
    }
}

class Book extends Product{
    title: string;
    pages: number;
    price: number;
    id: number;
  
    constructor(title: string, pages: number, price: number, id: number) {
      super(price, id);
      this.title = title;
      this.pages = pages;
    }
  
    calculateShippingCost(): number {
      return this.price * 0.1;
    }
  }
  
const myBook = new Book("Example Title", 300, 29.99, 1);
console.log(myBook.calculateShippingCost());  // Debería mostrar 2.999

// const bookObj = {
//     title: "Harry Potter",
//     pages: 100,
//     price: 1000,
//     id: 1,
//     calculateShippingCost(){
//         return this.price * 0.1
//     }
// }

// console.log(bookObj)

class Tv extends Product{
    name: string;

    constructor(name: string, price: number, id: number){
        super(price, id)
        this.name = name;
    }
}