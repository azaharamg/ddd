export default class PriceCalculator {
  getDiscountedPrice(currentPrice, discount) {
    const discountedAmount = (currentPrice * discount) / 100;
    return currentPrice - discountedAmount;
  }
}
