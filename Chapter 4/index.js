"use strict";

// let rain = true;

// if (rain) {
//     console.log("Taking my umbrella when going outside");
// } else {
//     console.log("I can leave my umbrella at home when going out today");
// };

// let age = Number(Math.floor(Math.random() * 19)); //randomly generate agex

// if (age < 18) {
//     console.log("We're very sorry but you can't get in under 18.");
//     alert("We're very sorry but you can't get in under 18.");
// } else {
//     console.log("Welcome!");
//     alert("Welcome!");
// };

// let hobbies = ["dancing", "cooking", "skating"];

// let randomElement = hobbies[Math.floor(Math.random() * hobbies.length)];

// console.log(randomElement);

// if (randomElement = "dancing") {
//     console.log("I love dancing too!");
// } else if (randomElement = "cooking") {
//     console.log("i love cooking too!");
// } else if (randomElement = "skating") {
//     console.log("please")
// };

//////act 4.1//////

// let sunshine = false;
// // let sunshine = true;

// console.log(sunshine);

// if (sunshine) {
//     alert("Let's go to the beach");
// } else if (sunshine != true) {
//     alert("Time to get a blanket and watch Netflix");
// };

// let age;
// let cost = 0;
// let message;

// //lwhile loop
// while (true) {
//     age = Number(prompt("Please enter your age here:"));

//     //Check if age is a positive number
//     if (age > 0 && Number.isInteger(age)) {
//         break; //Exit the loop if age is valid
//     } else {
//         alert("Please enter a valid age as a positive whole number."); // Prompt again if age is not valid
//     }
// }

// //Determine cost based on age
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under 3.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars.";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }

// //Output the message and cost
// console.log(message);
// console.log("The cost for your age is: " + cost + " dollars.");

// let age = Number(prompt("Please enter your age here"));

// let message;

// if (age >= 21) {
//     message = "You are eligible to buy alcohol and enter.";
// } else if (age >= 19) {
//     message = "You cannot buy alcohol but you can enter.";
// } else {
//     message = "You are to young to buy alcohol or enter."
// };

// alert(message);

// let age = Number(prompt("Please enter your age here"));
// let access = age < 18 ? "Access denied" : "Access granted";

// alert(access);
// let age = Number(prompt("Please enter your age here"));
// let ID = prompt("Do you have your ID?");
// let present;

// //check if the user has his/her/them/broccoli/train/dog/cat ID present
// if (ID === "yes") {
//     present = true;
// } else if (ID === "no") {
//     present = false;
// } else {
//     alert("please enter a valid answer");
// };

// //declaring array
// let haveID = [present, age]

// //Conditional ternary operators
// let access = haveID[0] = true && haveID[1] >= 18 ? "Access granted" : "Access denied";

// //display
// alert(access);

// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// };
//let activity = ["Get up", "Breakfast", "Drive to work", "Lunch", "Drive Home", "Dinner"];

// let activity = prompt('"Get up", "Breakfast", "Drive to work", "Lunch", "Drive Home", "Dinner". Please choose one:')

// switch(activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive Home":
//         console.log("It is 6:00Pm");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("Please select an activity. I cannot determine the time.");
//         break;
// };

///////4.4//////////
// let randomNumber = Math.floor(Math.random() * 6);

// let userQuestion = prompt("Ask the Magic 8-Ball a yes/no question:");

// let magic8BallResponse;

// switch (randomNumber) {
//   case 0:
//     magic8BallResponse = "It is certain.";
//     break;
//   case 1:
//     magic8BallResponse = "It is decidedly so.";
//     break;
//   case 2:
//     magic8BallResponse = "Reply hazy, try again.";
//     break;
//   case 3:
//     magic8BallResponse = "Don't count on it.";
//     break;
//   case 4:
//     magic8BallResponse = "My sources say no.";
//     break;
//   case 5:
//     magic8BallResponse = "Yes";
//     break;
//   default:
//     magic8BallResponse = "Hmm, something went wrong.";
//     break;
// }

// let finalResponse = `You asked: ${userQuestion}\nMagic 8-Ball says: ${magic8BallResponse}`;

// console.log(finalResponse);

// let grade = prompt("Enter your grade here from A - F please:").toUpperCase();

// switch (grade) {
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "C":
//   case "B":
//     console.log("You've passed!");
//     break;
//   case "A":
//     console.log("Nice!");
//     break;
//   default:
//     console.log("I don't know this grade.");
// };

////////////4.5//////////////

let prize;
const userInput = prompt(
  "Select a number between 0 and 10 to choose your prize:"
);

const selectedNumber = parseInt(userInput);

let outputMessage = "My Selection: ";

switch (selectedNumber) {
  case 0:
    prize = "A shiny medal!";
    break;
  case 1:
    prize = "A cozy blanket!";
    break;
  case 2:
    prize = "A delicious cake!";
    break;
  case 3:
    prize = "A surprise gift!";
    break;
  case 4:
    prize = "A coupon for a free meal!";
    break;
  case 5:
    prize = "A custom-made artwork!";
    break;
  case 6:
    prize = "A VIP concert ticket!";
    break;
  case 7:
    prize = "A weekend getaway!";
    break;
  case 8:
    prize = "A high-tech gadget!";
    break;
  case 9:
    prize = "A shopping spree!";
    break;
  case 10:
    prize = "A grand prize vacation!";
    break;
  default:
    prize = "Sorry, no prize this time.";
};

outputMessage += prize;

console.log(outputMessage);
