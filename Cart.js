export default class Cart {
  products = [];

  add(product) {
    this.products.push(product);
  }

  remove(productName) {
    this.products = this.products.filter(
      (item) => productName !== item.product.name
    );
  }
}
