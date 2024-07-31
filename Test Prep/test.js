"use strict";
///////////////35/////////////////
//creating class
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     };
// };

// //Create three people objects from the person class and print their names to the console.
// let Person1 = new Person("Michael", "Ross van den Berg");
// let Person2 = new Person("Homer", "Simpson");
// let Person3 = new Person("Peter", "Griffon");

// console.log("Hi", Person1.firstName, Person1.lastName);
// console.log("Hi", Person2.firstName, Person2.lastName);
// console.log("Hi", Person3.firstName, Person3.lastName);

// //////////////37//////////////
// //Create a Car class with a contructor for properties make,model,year.
// //Create two cars from this class and print their information.

// class Car {
//     constructor(model, make, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     };
//     drive() {
//         console.log("Driving my " + this.make + " car");
//     };
// };

// let McQueen = new Car("Nascar", "Cheverolet", 2008);
// let Doc_Hudson = new Car("Nascar", "Not Sure", 2009);
// let The_King = new Car("Nascar", "Dodge", 2010);

// console.log("Lighting McQueen is a ", McQueen.model, " model, ", McQueen.make, " make and made in ", McQueen.year);
// console.log("Lighting McQueen is a ", Doc_Hudson.model, " model, ", Doc_Hudson.make, " make and made in ", Doc_Hudson.year);
// console.log("Lighting McQueen is a ", The_King.model, " model, ", The_King.make, " make and made in ", The_King.year);

// ///////////38///////////
// //Try giving it a drive() method that prints "Driving my " + this.make + " car";
// McQueen.drive();

//////////////39//////////////
//Create an array of 10 guestnames.
// create a prompt that ask for a person's name.
// call a function that you must create that accepts a name and loops through
// your guests array list using a for of loop to return  if the person is allowed in.
// use an alert to give the result.

let guestList = ["Michael", "Alex", "Bhabha", "Jada", "Mike", "Harvey", "Louis", "Donna", "Jessica", "Robert"];

let p_name = prompt("What is your name?");

function allowed(naam) {
    for (let guest of guestList) {
        if (guest.toLowerCase() === naam.toLowerCase()) {
            return true;
        } else if (naam = " " || naam != isNaN) {
            return false;
        }
    };
};

if (allowed(p_name)) {
    alert(`Welcome ${p_name.toLowerCase()}`);
} else {
    alert(`You are not allowed ${p_name.toLowerCase()}`);
}

// let guestNames = ["Michael", "Alex", "Bhabha", "Jada", "Mike", "Harvey", "Louis", "Donna", "Jessica", "Robert"];

// let p_name = prompt("What is your name?");

// guestNames.forEach(e => console.log(e));

////////////40/////////////
//try using the above with a forEach loop.

// let guestNames = ["Michael", "Alex", "Bhabha", "Jada", "Mike", "Harvey", "Louis", "Donna", "Jessica", "Robert"];

// let p_name = prompt("What is your name?");

// function allow() {
//     let allowed = false;
//     guestNames.forEach(guestNames => {
//         if (guestNames === p_name) {
//             allowed = true;
//             alert(`${p_name}, you are allowed`);
//         } else {
//             allowed = false;
//             alert(`${p_name}, you are not allowed!`);
//         }

//     })
// }

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {
//     console.log(`Printing stuff: ${element} on array posistion ${index}`);
// };

// arr.forEach(printStuff);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// };

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// document.getElementById("h").innerHTML = arr.copyWithin(0, 3, 5);

// let arr = [1,2,3,4];

// let mapped_arr = arr.map(x => x ** 2);
// console.dir(mapped_arr);

// for (let i = 0; i < arr.length; i++) {
//     let mapped_arr = arr.map(x => x + 1);
//     console.log(mapped_arr);
// };

// let string = "I love JavaScript";
// let arr = string.split(" ");
// console.log(arr);

// let s1 = "I ";
// let s2 = "Love ";
// let s3 = "JavaScript";

// let result1 = s1.concat(s2);
// let result2 = result1.concat(s3);

// console.log(result2);

// let searchStr = "I love JavaScript";
// let pos = searchStr.search("ve");
// console.log(pos);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let pos1 = poem.charAt(10);
// let pos2 = poem.charAt(1000);
// console.log(pos1);
// console.log(pos2);

// let string = "This is my string";

// let subStr1 = string.slice(5);
// let subStr2 = string.slice(0, 3);
// console.log(`1: ${subStr1}`);
// console.log(`2: ${subStr2}`);

//console.dir(window);
// console.dir(window.history.length);

// window.history.go(-1);

// console.dir(window.navigator);

