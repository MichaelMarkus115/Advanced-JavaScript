"use strict";

//////////////////////////SPECIFYING EVENTS WITH EVENT LISTENERS////////////////////////////

//USING JS
//document.getElementById("unique").onclick = function() { magic(); };

//USING EVENT LISTENERS
// document.getElementById("unique").addEventListener("click", magic);

// function magic() {
//     alert("Hello World!");
// };

// document.getElementById("unique").addEventListener("click", function()
// { magic(arg1, arg2) });

////////////////////ONLOAD EVENT HANDLER///////////////
// window.onload = function () {
//   // whatever needs to happen after the page loads goes here
// };

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
// });

/////////MOUSE EVENT HANDLERS////////////
// function changeColor() {
//   document.getElementById("divvy").style.backgroundColor = "blue";
// };

// function triggerSomething() {
//   console.dir(event.target);
// };

// function sendInfo() {
//   let p = event.target.parentElement;
//   message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }

// function message(m) {
//   document.getElementById("welcome").innerHTML = m;
// }

////////////DOM EVENT FLOW//////////////
// function bubble() {
//   console.log(this.innerText);
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", bubble);
// }

// function logEvent() {
//   let p = event.target;
//   if (p.name == "firstname") {
//     message("First Name Changed to " + p.value);
//   } else {
//     message("Last Name Changed to " + p.value);
//   }
// }
// function sendInfo() {
//   let p = event.target.parentElement;
//   message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//   document.getElementById("welcome").innerHTML = m;
// }

// function numCheck() {
//   message("Number: " + !isNaN(event.key));
//   return !isNaN(event.key);
// }
// function numCheck2() {
//   message("Not a number: " + isNaN(event.key));
//   return isNaN(event.key);
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

// function numCheck() {
//   message(!isNaN(event.key));
//   return !isNaN(event.key);
// }
// function numCheck2() {
//   message(isNaN(event.key));
//   return isNaN(event.key);
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

// function valForm() {
//   var p = event.target.children;
//   if (p.firstName.value == "") {
//     message("Need a first name!!");
//     return false;
//   }
//   if (p.lastName.value == "") {
//     message("Need a last name!!");
//     return false;
//   }
//   if (p.age.value == "") {
//     message("Need an age!!");
//     return false;
//   }
//   return true;
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

//////////////////////////11.1////////////////////////////
// let colorMode = false;
// window.onclick = () => {
//   console.log(colorMode);
//   if (!colorMode) {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     colorMode = true;
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     colorMode = false;
//   }
// };

//////////////////////////11.2////////////////////////////
// let colorDivs = document.querySelectorAll("div");
// colorDivs.forEach((el) => {
//   el.addEventListener("click", () => {
//     document.body.style.backgroundColor = el.textContent;
//   })
// })

//////////////////////////11.3////////////////////////////
document.addEventListener("DOMContentLoaded", (e) => {
  message("Document Ready", e); 
});

window.onload = (e) => {
  message("Window Ready", e);
};

function message(string, event) {
  console.log(event);
  console.log(string);
};

//////////////////////////11.4////////////////////////////

//////////////////////////11.5////////////////////////////

//////////////////////////11.6////////////////////////////
