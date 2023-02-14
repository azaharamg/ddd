import Address from "./domain/Address.js";
import Customer from "./domain/Customer.js";

const customerOne = new Customer("Bcn", []);
console.log("customerOne", customerOne);

customerOne.updateAddress(new Address("Madrid"));
console.log("customerOne updateAddress", customerOne);
