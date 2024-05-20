/*Challenge */

/*
Crar un objecto shoppingCart (con type ShoppingCart) que tenga las siguientes propiedades:
- cart: un array de objectos (con type CartItem) que tenga las siguientes propiedades: 
    - name: string
    - price: number

- totalPrice: un number

- addToCart: una función que reciba como objeto (con type Product) que tenga las siguientes propiedades: 
    - name: un string
    - price: un number
    que añada un objecto (con type CartItem) el array cart y actualice el valor totalPrice
*/

// Define los tipos necesarios
type Product = {
    name: string;
    price: number;
  };
  
  type CartItem = {
    name: string;
    price: number;
  };
  
  type ShoppingCart = {
    cart: CartItem[];
    totalPrice: number;
    addToCart: (product: Product) => void;
  };
  
  // Crea el objeto shoppingCart
  const shoppingCart: ShoppingCart = {
    cart: [],
    totalPrice: 0,
  
    addToCart(product: Product) {
      // Añadir el producto al carrito
      this.cart.push({ name: product.name, price: product.price });
      // Actualizar el precio total
      this.totalPrice += product.price;
    }
  };
  
  // Ejemplo de uso
  const product1: Product = { name: "Apple", price: 1.5 };
  const product2: Product = { name: "Banana", price: 1.2 };
  
  shoppingCart.addToCart(product1);
  shoppingCart.addToCart(product2);
  
  console.log(shoppingCart.cart); // [{ name: "Apple", price: 1.5 }, { name: "Banana", price: 1.2 }]
  console.log(shoppingCart.totalPrice); // 2.7
  