import Product from "./Product.js";
import Cart from "./Cart.js";
import CartProduct from "./CartProducts.js";
import Price from "./Price.js";
import PriceCalculator from "./PriceCalculator.js";

// Cart 1
const cart1 = new Cart();

const priceCalculator = new PriceCalculator();
const applePencilPrice = new Price(5, "USD");
const priceWithDiscount = priceCalculator.getDiscountedPrice(
  applePencilPrice,
  10
);

const applePencil = new Product("Apple Pencil", priceWithDiscount, 3);
const cartProduct = new CartProduct(applePencil, 2);
cart1.add(cartProduct);

cart1.remove(applePencil);

// Cart 2
const cart2 = new Cart();
const cart2Product = new CartProduct(applePencil, 2);
cart2.add(cart2Product);

console.log(cart1);
