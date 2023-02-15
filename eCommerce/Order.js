export default class Order {
  constructor(cartItemsList) {
    orderItems = cartItemsList.map(() => {});
  }

  getTotalCost() {
    const totalPrice = 0;
    const totalWeight = 0;
    const totalCost = 0;
    orderItems.map(({ price, weight }) => {
      price += totalPrice;
      weight += totalWeight;
    });

    totalCost = totalPrice + totalWeight * 0.1;

    return totalCost;
  }
}
