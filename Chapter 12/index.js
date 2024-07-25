"use strict";

// let text = "I love JavaScript!";
// console.log(text.match(/javascript/));

//i modifier makes the expression case-insensitive
// console.log(text.match(/javascript/i));

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));

//gi modifier finds all matches
// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));

//CHARACTER OPTIONS
// let text = "j";
// console.log(text.match(/[abc]/));
// console.log(text.match(/[abcd]/));
// console.log(text.match(/[a-z]/)); //same as one above

// let text = "t";
// console.log(text.match(/[a-zA-Z]/));

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/)); //special characters won't match

// let text = "Just some text.";
// console.log(text.match(/./g)); //anything can match

// let text = "Just some text.";
// console.log(text.match(/\./g)); //fullstop

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g)); //any digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g)); //looking for white spaces

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));

// let nr = 357;
// console.log(nr.match(/3/g)); //cannot use match method on numbers

// let text = "I love JavaScript!";
// console.log(text.match(/(love|dislike)\s(

// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi));

// let text = "123123123";
// console.log(text.match(/(123)+/));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i));

//SEARCHING AND REPLACING STRINGS
// let text = "That's not the case.";
//returns the index of the word we're searching for
// console.log(text.search(/Case/i));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript"));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(`This is the valid email: ${validEmail.match(emailPattern)}`);
// console.log(`This is the invalid email: ${invalidEmail.match(emailPattern)}`);

// function test(a, b, c) {
//   console.log("first:", a, arguments[0]);
//   console.log("second:", b, arguments[1]);
//   console.log("third:", c, arguments[2]);
// };

// test("fun", "js", "secrets");

// function test(a, b, c) {
//   a = "nice";
//   arguments[1] = "JavaScript";
//   console.log("first:", a, arguments[0]);
//   console.log("second:", b, arguments[1]);
//   console.log("third:", c, arguments[2]);
// };

// test("fun", "js", "secrets");

//JAVASCRIPT HOISTING
// let x;
// x = 5;
// console.log(x);

// x = 5;
// console.log(x);
// let x;

//ERROR HANDLING
// try {
//   trySomething();
// } catch (e) {
//   console.log("Oh oh");
// } finally {
//   console.log("Error or no error, I will be logged!");
// }

// function trySomething() {
//     alert("Evrything works now!");
// }

// function somethingVeryDangerous() {
//   throw RangeError();
// }

//USING COOKIES//
// document.cookie = "name=Maaike;favouriteColor=black";

// let cookie = decodeURIComponent(document.cookie);
// let cookieList = cookie.split(";"); //creates an array

// for (let i = 0; i < cookieList.length; i++) {
//   let c = cookieList[i];
//   if (c.charAt(0) == " ") {
//     c = c.trim();
//   }

//   if (c.startsWith("name")) {
//     alert(c.substring(5, c.length));
//   }
// }

// function setCookie(e) {
//   document.cookie = "name=" + e.value + ";";
// }
// function sayHi(key) {
//   let name = getCookie(key);
//   document.getElementById("hi").innerHTML = "Hi " + name;
// }
// function getCookie(key) {
//   let cookie = decodeURIComponent(document.cookie);
//   let cookieList = cookie.split(";");
//   for (let i = 0; i < cookieList.length; i++) {
//     let c = cookieList[i];
//     if (c.charAt(0) == " ") {
//       c = c.trim();
//     }
//     if (c.startsWith(key)) {
//       console.log("hi" + c);
//       return c.substring(key.length + 1, c.length);
//     }
//   }
// }

//LOCAL STORAGE//
// let message = "Hello Storage";
// localStorage.setItem("example", message);

// if (localStorage.getItem("example")) {
//     document.getElementById("stored").innerHTML = localStorage.getItem("example");
// };

// console.log(window.localStorage.key(0));
// console.log(window.localStorage.getItem(window.localStorage.key(0)));//returns the keys value

// console.log(window.localStorage.removeItem("example"));

// console.log(window.localStorage.clear());

//JSON//
// let objects = {
//   companies: [
//     {
//       name: "JavaScript Code Dojo",
//       addresses: [
//         {
//           street: "123 Main street",
//           zipcode: 12345,
//           city: "Scott",
//         },
//         {
//           street: "123 Side street",
//           zipcode: 35401,
//           city: "Tuscaloosa",
//         },
//       ],
//     },
//     {
//       name: "Python Code Dojo",
//       addresses: [
//         {
//           street: "123 Party street",
//           zipcode: 68863,
//           city: "Nebraska",
//         },
//         {
//           street: "123 Monty street",
//           zipcode: 33306,
//           city: "Florida",
//         },
//       ],
//     },
//   ],
// };

//PARSING JSON//
// let str = "{\"name\": \"Maaike\", \"age\": 30}";
// let obj = JSON.parse(str);
// console.log(obj.name, "is", obj.age);

// let dog = {
//     "name": "Michael",
//     "breed": "Pug",
//     "age": 20,
//     "alive": true
// };

// let strDog = JSON.stringify(dog);
// console.log(typeof (strDog));
// console.log(strDog);

/////////////////////12.1////////////////////
// let output = document.getElementById("output");
// let findValue = document.getElementById("sText");
// let replaceValue = document.getElementById("rText");
// document.querySelector("button").addEventListener("click", lookup);

// function lookup() {
//     let s = output.textContent;
//     let rt = replaceValue.value;
//     let re = new RegExp(findValue.value, "gi");

//     if (s.match(re)) {
//         let newValue = s.replace(re, rt);
//         output.textContent = newValue;
//     };
// };

/////////////////////12.2////////////////////
// let output = document.querySelector(".output");
// let emailVal = document.querySelector("input");
// let btn = document.querySelector("button");
// let emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

// btn.addEventListener("click", (e) => {
//     let val = emailVal.value;
//     let result = emailExp.test(val);
//     let response = "";

//     if (!result) {
//         response = "Invalid Email";
//         output.style.color = "red";
//     } else {
//         response = "Valid Email";
//         output.style.color = "green";
//     }
//     emailVal.value = "";
//     output.textContent = response;
// });

/////////////////////12.3////////////////////
// function showNames() {
//     let lastOne = "";

//     for (let i = 0; i < arguments.length; i++) {
//         lastOne = arguments[i];
//     };
//     return lastOne;
// };

// console.log(showNames("JavaScript", "Laurence", "Mike", "Larry", "Harvey"));

/////////////////////12.4////////////////////
// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder() {
//   let counter = val;
//   for (let i = 0; i < val; i++) {
//     counter++;
//   }
//   return counter;
// }

///////////////////12.5////////////
//using throw, try, catch, finally

// function checkNum(val) {
//     try {
//         if (isNaN(val)) {
//             throw "not a number!";
//         } else {
//             console.log("This is a Number");
//         }
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log(`This is the value: ${val}`);
//     }
// };

// checkNum("a");
// checkNum(101);

///////////////////12.6/////////////////
// console.log(document.cookie);
// console.log(rCookie("test1"));
// console.log(rCookie("test"));
// cCookie("test1", "new Cookie1", 30);
// cCookie("test3", "new Cookie2", 20);
// dCookie("test2");
// rCookie("Michael");

// function cCookie(cName, val, days) {
//     if (days) {
//         let d = new Date();
//         d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
//         let e = "; expires=" + d.toUTCString();
//         document.cookie = cName + "=" + val + e + "; path=/";
//     };
// };

// function rCookie(cName) {
//     let cookieValue = false;
//     let arr = document.cookie.split("; ");
//     arr.forEach(str => {
//         let cookie = str.split("=");
//         if (cookie[0] == cName) {
//             cookieValue = cookie[1];
//         };
//     });
//     return cookieValue;
// };

// function dCookie(cName) {
//     cCookie(cName, "", -1);
// };

///////////////////12.7/////////////////

// let userTask = document.querySelector(".main input");
// let addBtn = document.querySelector(".main button");
// let output = document.querySelector(".output");
// let tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
// addBtn.addEventListener("click", createListItem);
// if (tasks.length > 0) {
//   tasks.forEach((task) => {
//     genItem(task.val, task.checked);
//   });
// }
// function saveTasks() {
//   localStorage.setItem("tasklist", JSON.stringify(tasks));
// }
// function buildTasks() {
//   tasks.length = 0;
//   let curList = output.querySelectorAll("li");
//   curList.forEach((el) => {
//     let tempTask = {
//       val: el.textContent,
//       checked: false,
//     };
//     if (el.classList.contains("ready")) {
//       tempTask.checked = true;
//     }
//     tasks.push(tempTask);
//   });
//   saveTasks();
// }
// function genItem(val, complete) {
//   let li = document.createElement("li");
//   let temp = document.createTextNode(val);
//   li.appendChild(temp);
//   output.append(li);
//   userTask.value = "";
//   if (complete) {
//     li.classList.add("ready");
//   }
//   li.addEventListener("click", (e) => {
//     li.classList.toggle("ready");
//     buildTasks();
//   });
//   return val;
// }
// function createListItem() {
//   let val = userTask.value;
//   if (val.length > 0) {
//     let myObj = {
//       val: genItem(val, false),
//       checked: false,
//     };
//     tasks.push(myObj);
//     saveTasks();
//   }
// }

///////////////////12.8//////////////////
// let myList = [
//   {
//     "fName": "Michael",
//     "age": "20",
//   },
//   {
//     "fName": "Harvey",
//     "age": "45",
//   },
// ];

// output();

// function output() {
//     myList.forEach((el) => {
//         console.log(`${el.fName} = ${el.age}`);
//     });
// };

///////////////12.9/////////////////
// let myList = [
//   {
//     "fName": "Michael",
//     "age": "20",
//   },
//   {
//     "fName": "Harvey",
//     "age": "45",
//   },
// ];

// let newStr = JSON.stringify(myList);
// let newObj = JSON.parse(newStr);
// newObj.forEach((el) => {
//     console.log(el);
// });