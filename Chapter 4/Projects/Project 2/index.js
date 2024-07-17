"use strict";

let friend = prompt("Please enter a name of a person you consider a friend").toLowerCase();


switch(friend) {
    case "Michael".toLowerCase():
    case "Alex".toLowerCase():
    case "Juan".toLowerCase():
        console.log("He is your friend!");
        break;
    case "Tom".toLowerCase():
    case "Jerry".toLowerCase():
        console.log("You know them but they are not your friends!");
        break;
    default:
        console.log("You do not know this person");
};