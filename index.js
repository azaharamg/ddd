import Product from "./Product.js";
import Cart from "./Cart.js";
import CartProduct from "./CartProducts.js";
import Price from "./Price.js";

// Cart 1
const cart1 = new Cart();

const applePencilPrice = new Price(5, "USD");
const headPhonePrice = new Price(50, "USD");
const applePencil = new Product("Apple Pencil", applePencilPrice);
const headPhone = new Product("Sony head phone", headPhonePrice);
const cartProduct = new CartProduct(applePencil, 2);
const cartProduct2 = new CartProduct(headPhone, 1);
cart1.add(cartProduct);
cart1.add(cartProduct2);

cart1.remove(applePencil);

// Cart 2
const cart2 = new Cart();
const cart2Product = new CartProduct(applePencil, 2);
cart2.add(cart2Product);

// cart.remove("Sony head phone");
console.log(cart1.products[0]);
