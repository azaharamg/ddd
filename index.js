import Product from "./Product.js";
import Cart from "./Cart.js";
import CartProduct from "./CartProducts.js";


// Cart 1
const cart1 = new Cart();

const appelPencil = new Product("Apple Pencil");
// const headPhone = new Product("Sony head phone");
const cartProduct = new CartProduct(appelPencil, 2);
// const cartProduct2 = new CartProduct(headPhone, 1);
cart1.add(cartProduct);
// cart1.add(cartProduct2);

// cart1.remove(appelPencil);

// Cart 2
const cart2 = new Cart();
const cart2Product = new CartProduct(appelPencil, 2);
cart2.add(cart2Product);

// cart.remove("Sony head phone");
console.log(cart1.equals(cart2));


