import Address from "../domain/Address.js";
import Customer from "../domain/Customer.js";

const customerOne = new Customer("Bcn", []);
console.log("customerOne", customerOne);

const newAddress = new Address("Madrid");
customerOne.updateAddress(newAddress);
console.log("customerOne updateAddress", customerOne);
