"use strict";

// function doSomething(callback) {
//     callback();
// };

// function sayHi() {
//     console.log("Hi");
// };

// doSomething(sayHi);

///////////////////////////////CALLBACKS//////////////////////
// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case grade == "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case grade == "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }

// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }

// getGrade(85, judge);

// setInterval(encourage, 1000);
// function encourage() {
//   console.log("You're doing great, keep going!");
// }

///////////////////////////////PROMISES//////////////////////
// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 20;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });

// promise.then(
//   function (value) {
//     console.log("Success:", value);
//   },
//   function (error) {
//     console.log("Error:", error);
//   }
// );

// const promise = new Promise((resolve, reject) => {
//   resolve("success!");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

// const promise = new Promise((resolve, reject) => {
//   reject("oops... ");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });
///////////////////////////////ASYNC AND AWAIT//////////////////////
// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

///////////////////////////////EVENT LOOPS//////////////////////
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 0);
// console.log(add(4, 5));

// function add(x, y) {
//   return x + y;
// }
///////////////////////////////13.1//////////////////////

// //1. Create a function named greet() that takes one argument, fullName. That
// // argument should be an array. Output the items of the array into the console
// // interpolated into a greeting message string.
// function greet(fullName) {
//     console.log(`Welcome, ${fullName[0]} ${fullName[1]}`);
// };

// //2. Create a second function that has two arguments: the first one is a string for
// // the user's full name, and the second is the callback function.
// //3. Split the string into an array using the split() method.
// function process(name_string, callback) {
//     let fullName = name_string.split(" ");
// //4. Send the full-name array to the greet() function created in the first step.
//     callback(fullName);
// };

// //5. Invoke the process of the callback function.
// process("Mike Ross", greet);

// ///////////////////////////////13.2//////////////////////
// //1. Set up a Promise that resolves with a value of Start Counting.
// let mypromise = new Promise((resolve, reject) => {
//     resolve("Start Counting");
// });

// //2. Create a function named counter() that has one argument that gets the value
// // and outputs it into the console.
// function counter(val) {
//     console.log(val);
// };

// //3. Set up the next function in the Promise with four then() instances, which
// // should output a value into the counter function, and return a value which
// // will provide input for the subsequent then() instance. The returned values
// // should be one, then two, then three.

// mypromise
//     .then(value => {counter(value); return "one"})
//     .then(value => {counter(value); return "one"})
//     .then(value => {counter(value); return "one"})
//     .then(value => {counter(value); return "one"});
// ///////////////////////////////13.3//////////////////////
// let count = 0;

// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             count++;
//             resolve(`x value ${val} counter: ${count}`);    
//         }, 1000);
//     });
// };

// async function aCall(val) {
//     console.log(`Ready ${val} counter"${counter}`);
//     let res = await outputTime(val);
//     console.log(res);
// };

// for (let i = 0; i < 4; i++) {
//     aCall(i);
// }


