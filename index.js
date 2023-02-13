import Product from "./Product.js";
import Cart from "./Cart.js";
import CartProduct from "./CartProducts.js";
const cart = new Cart();

const appelPencil = new Product("Apple Pencil");
const headPhone = new Product("Sony head phone");
const cartProduct = new CartProduct(appelPencil, 2);
const cartProduct2 = new CartProduct(headPhone, 1);
cart.add(cartProduct);
cart.add(cartProduct2);

cart.remove(appelPencil);

// cart.remove("Sony head phone");
console.log(cart.getRemovedProductsHistory());
