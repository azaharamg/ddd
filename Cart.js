export default class Cart {
  products = [];
  removedProductsHistory = [];
  id = Math.random();
  isCheckedOut = false;

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

  equals(cart) {
    return this.id === cart.id;
  }

  checkout() {
    if (this.isCheckedOut === false) {
      isCheckedOut = true;
      return new Order(products);
    }
  }
}
