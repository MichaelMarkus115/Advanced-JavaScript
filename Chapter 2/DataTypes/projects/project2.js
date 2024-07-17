"use strict";

//getting user's info
let heightInches = Number(prompt("Enter your height here please in inches"));
let weightPounds = Number(prompt("Enter your weight here in pounds please"));

//conversion factors
const cm_in_an_inch = 2.54;
const pounds_per_kg = 2.2046;


//convert height from inches to centimeters 
let heightCentimeters = heightInches * cm_in_an_inch; //to get it to meters we will need to dived the number
                                                        //by 100 and fix it to 2 decimals
                                                        
let weightKg = weightPounds / pounds_per_kg; //convert weight from pounds to kgs

//calculate BMI (body mass index)
//BMI = weight(kg) /(height (m))^2
let heightMeters = heightCentimeters/100;

let bmi = weightKg/ (heightMeters * heightMeters);

//output
console.log(`Height: ${heightInches} inches = ${heightMeters.toFixed(2)}m`);
console.log(`Weight: ${weightPounds} pounds = ${weightKg.toFixed(2)}kg`);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);


//checking BMI and deciding if it is healthy, overweight or obese
if (bmi < 18.5) {
    console.log("You are underweight. Time to eat!");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are within a healthy range. Keep it up!");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
} else if (bmi >= 30) {
    console.log("You are considered obese");
};
