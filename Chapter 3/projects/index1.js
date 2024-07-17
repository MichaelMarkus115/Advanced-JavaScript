"use strict";

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift(); //removes first (Laurence)
theList.pop();  //removes last (["one", "two"])

theList.unshift("FIRST"); //add "FIRST" to the front of the array

theList[3] = "Hello World"; //adds to 4th item value

theList[2] = "MIDDLE";  //adds to 3rd item value

theList[6] = null;

theList.push("LAST"); //add LAST to last posision in array

console.log(theList); //display array in the console
