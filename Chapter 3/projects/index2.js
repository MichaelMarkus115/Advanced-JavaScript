"use strict";

//Create an empty array to hold store items inventory
let inventory = [];

//Create three items with properties
let item1 = {
  name: 'Laptop',
  model: 'XPS 15',
  cost: 1500,
  quantity: 10
};

let item2 = {
  name: 'Smartphone',
  model: 'iPhone 12',
  cost: 1000,
  quantity: 20
};

let item3 = {
  name: 'Headphones',
  model: 'Sony WH-1000XM4',
  cost: 300,
  quantity: 15
};

//Add all three items to the main array using push method
inventory.push(item1, item2, item3);

//Log the inventory array to the console
console.log("Inventory Array:");
console.log(inventory);

//Access and log the quantity element of the third item
console.log("\nQuantity of the third item:");
console.log(inventory[2].quantity);

//Adding and accessing more elements
let item4 = {
  name: 'Tablet',
  model: 'iPad Pro',
  cost: 800,
  quantity: 12
};

inventory.push(item4);

console.log("\nUpdated Inventory Array with Item 4:");
console.log(inventory);

//Accessing other properties
console.log("\nCost of the second item:");
console.log(inventory[1].cost);
