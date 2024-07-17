"use strict";

// let arr1 = new Array("purple", "green", "yellow");

// let arr2 = ["black", "orange", "pink"];

// let arr3 = new Array(10);

// let arr4 = [10];

// console.log(arr3);
// console.log(arr4); //better practice

// let arr1 = ["hi", "there", 5, true];

// console.log(typeof(arr1[0]));
// console.log(typeof(arr1[1]));
// console.log(typeof(arr1[2]));
// console.log(typeof(arr1[3]));

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);

// // let arr = ["nope, now you are just overwriting the array"];

////////////////////CARS/////////////////////

// let cars = ["Toyota", "Renault", "Volkswagen"];
// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[-1]);

// cars[0] = "Tesla";

// console.log(cars[0]);

// cars[3] = "Kia";

// cars[-1] = "Fiat";

// console.log(cars[3]);
// console.log(cars[-1]);

//////////////////////////////LENGTH/////////////////////////
// let colours = ["black", "orange", "pink"];
// let booleans = [true, false, false, true];
// let emptyArr = [];

// console.log("Length of colours array: ", colours.length);
// console.log("Length of booleans array: ", booleans.length);
// console.log("Length of emptyArr array: ", emptyArr.length);

// let lastElement = colours[colours.length - 1];

// let numbers = [12, 48 , 74];
// numbers[5] = 48;
// console.log(numbers.length);

// console.log("numbers", numbers);

// ///////////////////////////EXERCISE 3.1/////////////////////////////
// let shopping = ["Milk", "Bread", "Apples"];
// console.log(shopping.length);

// shopping[1] = "Bananas";

// console.log(shopping);

//////////////ARRAY METHODS//////////////////
///////////////PUSH//////////////////
// let favouriteFruit = ["grape", "watermelon", "orange"];
// favouriteFruit.push("tangerine");//push is used to add a new element to the end of an array

// let lengthOfFavouriteFruits = favouriteFruit.push("lime"); //push method returns new length of array and this is how we store them

// console.log("My Favourite Fruits: ", favouriteFruit);

// ///////////////SPLICE/////////////////       //we use splice() to add elements into a specific index in an array
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// // arrOfShapes.splice(2, 0, "square", "trapezoid");
// // console.log(arrOfShapes);

// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 12, "square", "trapezoid"); //if the 2nd parameter is greater than the length of the string it won't process it

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7,8,9);
// console.log(arr8);

// arr8.pop();
// console.log(arr8);

// arr8.shift();
// console.log(arr8);

// arr8.splice(1,3);
// console.log(arr8);

// delete arr8[0];
// console.log(arr8);

// let findValue = arr8.find((e) => e === 6);
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);

// let arr8 = [2, 6, 7, 8];

// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);

// let findIndex3 = arr8.indexOf(6, 2);
// console.log(findIndex3);

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names);
// names.sort(); //ascending order
// console.log(names);
// names.reverse(); //reverses order
// console.log(names);

////////////////EXERCISE 3.2/////////////////

// let shopping = [];
// shopping = ["Milk", "Bread", "Apples"];

// shopping.splice(1, 1, "bananas", "eggs"); //add

// shopping.pop();//remove last

// shopping.sort(); //not working?
// console.log(shopping);

// let Milk = shopping.indexOf("Milk"); //index of Milke
// console.log(Milk);

// let bananas = shopping.indexOf("bananas"); //add after bananas
// shopping.splice(bananas + 1, 0, "carrots", "lettuce");

// let List = ["juice", "pop"]; //new list

// let combined = shopping.concat(List, List);
// console.log(combined);

// console.log(shopping.lastIndexOf("pop"));

/////////////MULTI DIMENSIONAL ARRAYS//////////////

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];

// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arrOfArrays2);

// let value = arrOfArrays[0][1];
// console.log(value);

// let value2 = arrOfArrays[2][2];
// console.log(value2);

// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(arrOfArraysOfArrays);

// let middleValue = arrOfArraysOfArrays[1][1][1];
// console.log(middleValue);

/////////////////3.3/////////////////
// let arr1 = [1, 2, 3];
// let arr2 = [arr1, arr1, arr1];

// let value2 = arr2[1][1];

// console.log(arr1);
// console.log(arr2);
// console.log(value2);

//////////////OBJECTS//////////
// let arr = [1, 2, 3];
// console.log(typeof arr);

// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,
// };

// let dogColor = dog["color"];
// console.log(dogColor);

// let dogColor2 = dog.color;
// console.log(dogColor2);

// dog["color"] = "blue"; //update the object
// dog.weight = 2.3;

// console.log(dog);

// dog['age'] = "three";
// console.log(dog);

// let variable = "age";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

/////////////////3.4///////////////
// let car = {
//     make : "Fiat",
//     model : 500,
//     year: 2017,
//     color: "red",
//     slow: true,
//     forSale: false,
//     price: "R20 000"
// };

// let variable = "color";
// car[variable] = "blue";

// variable = "forSale";
// car[variable] = true;
// console.log(car);

// console.log(car.make);
// console.log(car.model);

// console.log(car.price);

//////////OBJECTS IN OBJECTS///////////
// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };

// console.log(company);

// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };

// console.log(company);

// let activity = company.activities[1];
// console.log(activity);

// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];

// let streetName = addresses[0].street;
// console.log(streetName);

// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };

// console.log(company);

////////////////3.5////////////////////
// let people = {
//   friends: [],
// };

// let friend1 = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 1,
// };

// let friend2 = {
//   firstName: "Jane",
//   lastName: "Smith",
//   id: 2,
// };

// let friend3 = {
//   firstName: "Michael",
//   lastName: "Johnson",
//   id: 3,
// };

// people.friends.push(friend1, friend2, friend3);

// console.log(people);


const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);