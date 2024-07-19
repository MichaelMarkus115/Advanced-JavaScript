"use strict";

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// };

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//     };
// };

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// let fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
//     console.log(nr2);
// };

// //////////5.1//////////
// const mai = 5;
// const solution = Math.floor(Math.random() * mai) + 1;

// let isCorrect = false;

// while (isCorrect) {
//     let guess = Number(prompt(`Guess a number between 1 and ${mai}`));

//     if (guess === solution) {
//         isCorrect = true;
//         alert("Congrats! You have guessed the number correctly!");
//     } else {
//         if (guess > solution) {
//             alert("The number you guessed is too high. Try again!");
//         } else {
//             alert("The number you guessed is too low. Try again!")
//         };
//     };
// };

// ////////do-while/////////
// let counter = 0;
// let step = 5;

// do {
//     console.log(counter);
//     counter++;
// } while (counter <= 100);

///5.3///
// const myWork = [];

// for (let i = 1; i < 10; i++) {
//   let stat = i % 2 ? true : false;
//   let temp = {
//     name: `Lesson ${i}`,
//     status: stat,
//   };
//   myWork.push(temp);
// }

// console.log(myWork);

//nested loops
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   };
// };

// console.log(arrOfArrays);
// console.table(arrOfArrays);

//5.4//

// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;

// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let i = 0; i < cols; i++) {
//         counter++;
//         tempTable.push(counter);
//     };
//     myTable.push(tempTable);
// };

// console.table(myTable);

//loops and arrays
// let names = ["Chantal", "John", "Maiime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// };

//5.5//
// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;

// for (let i = 0; i < cells + 1; i++) {
//     if (counter % 8 == 0) {
//         if (row != undefined) {
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);

// }
// console.table(grid);

//5.6//

// const myArray = [];

// for (let i = 0; i < 100; i++) {
//     myArray.push(i + 1);
// };

// console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// };

// for (let val of myArray) {
//     console.log(val);
// };

//for in//
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// for (let prop in car) {
//   console.log(car[prop]);
// };

// console.log("==========================")

// for (let prop in car) {
//     console.log(prop);
// };

//5.7//
let car = {
  model: "Golf",
  year: 2024,
  color: "blue",
};

for (let prop in car) {
  console.log(prop, car[prop]);
}

let myArr = ["a", "b", "c"];

for (let i = 0; i < myArr.length; i++) {
  console.log(i, myArr[i]);
}

for (let alpha in myArr) {
  console.log(alpha, myArr[alpha]);
}

//5.8//
let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    continue;
  }
  output += i;
}
console.log(output);
