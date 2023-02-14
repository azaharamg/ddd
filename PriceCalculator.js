export default class PriceCalculator {
  getDiscountedPrice(currentPrice, discount) {
    const discountedAmount = (currentPrice.amount * discount) / 100;
    return currentPrice - discountedAmount;
  }
}
