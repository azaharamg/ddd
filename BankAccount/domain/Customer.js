export default class Customer {
  constructor(address, bankListAccounts) {
    this.address = address;
    this.bankListAccounts = bankListAccounts;
  }

  updateAddress(address) {
    this.address = address;
  }
}
