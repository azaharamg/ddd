export default class Cart {
  products = [];

  add(product) {
    this.products.push(product);
  }
}
