export default class Customer {
  constructor(address, bankListAccounts) {
    this.address = address;
    this.bankListAccounts = bankListAccounts;
  }

  updateAddress(address) {
    // update all bankListAccounts
    this.address = address;
  }
}
