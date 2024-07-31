/*
Create three people objects from the person 
class and print their names to the console.
(5 points)
*/
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// let p1 = new Person("Michael", "van den Berg");
// let p2 = new Person("Homer", "Simpson");
// let p3 = new Person("Peter", "Parker");

// console.log(`Hi ${p1.firstname} ${p1.lastname}`);
// console.log(`Hi ${p2.firstname} ${p2.lastname}`);
// console.log(`Hi ${p3.firstname} ${p3.lastname}`);


/*
Create a Car class with a contructor for 
properties make, model and year. 
Create two cars from this class and print 
their information.
Try giving it a drive() method that prints 
"Driving my " + this.make + " car";
(5 points)
*/

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     };
//     drive() {
//         console.log("Driving my " + this.make + " car!");
//     };
// };

// let McQueen = new Car("Cheverolet", "Nascar", "2008");
// let the_King = new Car("Dodge", "Nascar", "1990");

// console.log(`McQueen - Make: ${McQueen.make} \n          Model: ${McQueen.model} \n          Year: ${McQueen.year}`);
// console.log(`The King - Make: ${the_King.make} \n           Model: ${the_King.model} \n           Year: ${the_King.year}`);
// McQueen.drive();
// the_King.drive();

/*
From this array below create a prompt that ask for 
a person's name. Create and call a function that
accepts a name and loops through your 
guests array list using a for of loop to return  
if the person is a guest or not. Use an alert 
to display the result.
(5 points)
*/

let guests = ["Pete", "Margret", "Lacy", "Karl", "Rosanne"];

let p_Name = prompt("Enter your name.");

function allowed(name) {
    for(let guest of guests) {
        if(guest === name) {
            return true;
        }
    }
    return false;

}

if(allowed(p_Name)) {
    alert(`Welcome ${p_Name}`);
} else {
    alert(`Sorry ${p_Name}, you are not on the list!`);
};
