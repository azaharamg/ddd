import Product from "./Product.js";
import Cart from "./Cart.js";
const cart = new Cart();

const appelPencil = new Product("Apple Pencil");
const headPhone = new Product("Sony head phone");
cart.add(appelPencil);
cart.add(headPhone);

console.log(cart);
