"use strict";

// //function
// function Dog(dogName, weight, color, breed) {
//   this.dogName = dogName;
//   this.weight = weight;
//   this.color = color;
//   this.breed = breed;
// };

//class

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     };
// };

// //object
// let dog = new Dog("Jacky", 30, "brown", "labrador");

// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     };
// };

// let p = new Person("Michael", "van den Berg")

// console.log(`Hi there, ${p.firstName} ${p.lastName}!`);

//7.1//
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     };
// };

// let p1 = new Person("Michael", "van den Berg");
// let p2 = new Person("JavaScript", "is fun");

// console.log(`Hello ${p1.firstName} ${p1.lastName}!`);
// console.log(`Hello ${p2.firstName} ${p2.lastName}!`);

//methods
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there! I'm", this.firstname);
//   }
// }

// let p = new Person("Maaike", "van Putten");
// p.greet();

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
//   compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//   }
// }

// let p = new Person("Maaike", "van Putten");
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

//7.2
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullname() {
//         return this.firstName + " " + this.lastName;
//     };
// };

// let p1 = new Person("Michael", "van den Berg");
// let p2 = new Person("Neil", "Armstrong");

// console.log(p1.fullname());
// console.log(p2.fullname());

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
//   compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//   }
// }

// let p = new Person("Maaike", "van Putten");
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

//super/parent class
// class Vehicle {
//   constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// };

// class Motorcycle extends Vehicle {
//   constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//   }
//   doWheelie() {
//     console.log("Driving on one wheel!");
//   }
// };

// let motor = new Motorcycle("Black", 300, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

//prototype
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
// }

// Person.prototype.introduce = function () {
//   console.log("Hi, I'm", this.firstname);
// };

// Person.prototype.favoriteColor = "green";
// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();


//7.3
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    speak() {
        console.log(this.species + " " + this.sound);
    }
}

Animal.prototype.eat = function () {
    return this.species + " is eating";
}

let cat = new Animal("cow", "moo");
let dog = new Animal("pig", "oink");

cat.speak();
console.log(dog.eat());
console.log(dog);

