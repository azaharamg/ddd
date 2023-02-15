import Price from "./Price";
export default class Order {
  constructor(cartItemsList) {
    orderItems = cartItemsList.map(() => {});
  }

  getTotalCost() {
    const totalPrice = 0;
    const totalWeight = 0;
    const totalCost = 0;
    orderItems.map(({ price, weight }) => {
      totalPrice += price;
      totalWeight += weight;
    });

    totalCost = totalPrice + totalWeight * 0.1;

    return new Price(totalCost, "USD");
  }
}
