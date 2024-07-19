"use strict";

// function sayHello() {
//     let you = prompt("What is your name?");
//     alert(`Hello ${you}`);
// };

// sayHello();

//6.1//

// let x = Number(prompt("Enter your first number."));
// let y = Number(prompt("Enter your first number."));

// function add(x,y) {
//     return x + y;
// };

// console.log(add(x,y));

//6.2//
// let descriptive = ["pretty", "warm", "cold"];

// function describe() {
//     let myName = prompt("Please enter your name here.");
//     let nameDescript = Math.floor(Math.random() * descriptive.length);
//     console.log(descriptive[nameDescript] + " " + nameDescript);
// };

// describe();

//parameters and arguments//
function tester(para1, para2) {
  return para1 + " " + para2;
};

const arg1 = "argument 1";
const arg2 = "argument 2";

tester(arg1, arg2);

