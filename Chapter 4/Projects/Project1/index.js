"use strict";

let dynamicNumber = Math.floor(Math.random() *11); //dynamic

console.log(dynamicNumber);

let check = true;

while(check) {
    let User = Number(prompt("Please enter a new number between 0 - 10"));
    
    if (User < dynamicNumber) {
        alert("Please enter the number again.");
        console.log("The number is gretaer than the dynamic number!");
    } else if (User > dynamicNumber) {
        console.log("The number is smaller than the dynamic number.");
        alert("Please enter a number again");
    } else if (User === dynamicNumber) {
        check = false;
        alert("Congrats, it is correct!");
        console.log(`Congrats! The number was ${dynamicNumber}`);
    } else if (User = NaN) {
        alert("Please enter a number");
    };
};  

