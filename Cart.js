export default class Cart {
  products = [];
  removedProductsHistory = []

  add(product) {
    this.products.push(product);
  }

  remove(product) {
    this.products = this.products.filter(
      (item) => product.name !== item.product.name
    );

    this.removedProductsHistory.push(product);
  }

  getRemovedProductsHistory() {
    return this.removedProductsHistory;
  }
}
