type Product = {
    name: string;
    price: number;
}

type ShoppingCart = {
    id: string;
    cart: Product[];
    addTocart: (product: Product) => void;
    calculatePrice: () => number;
}

// Implementación del objeto ShoppingCart
const shoppingCart: ShoppingCart = {
    id: "abc123",
    cart: [],
    addTocart(product: Product) {
        this.cart.push(product);
    },
    calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
            const product = this.cart[i];
            totalPrice += product.price;
        }
        return totalPrice;
    }
}

// Ejemplo de uso
console.log("for loop");
console.log(shoppingCart.calculatePrice()); // Debería imprimir 0 porque el carrito está vacío

const product1: Product = { name: "Apple", price: 1.5 };
const product2: Product = { name: "Banana", price: 1.2 };

shoppingCart.addTocart(product1);
shoppingCart.addTocart(product2);

console.log(shoppingCart.cart); // [{ name: "Apple", price: 1.5 }, { name: "Banana", price: 1.2 }]
console.log(shoppingCart.calculatePrice()); // 2.7

// Para el bucle for of, asegurémonos de definir una lista de frutas
console.log("\nfor of loop");
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
