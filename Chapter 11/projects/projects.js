"use strict";

//Project 1
// let counter = [];
// let main = document.querySelector(".container");
// main.addEventListener("click", tracker);

// function tracker(e) {
//   let el = e.target;

//   if (el.id) {
//     let temp = {};
//     //temp declared asan empty object
//     temp.content = el.textContent;
//     //all content in content must display in the temp objects
//     temp.id = el.id;
//     temp.tagName = el.tagName;
//     temp.class = el.className;
//     console.dir(el);
//     //properties willbe printed into console regarding the webpage
//     counter.push(temp);
//     //push temp object into counter array
//     console.log(counter);
//   };
// };

//Project 2
// let starsUL = document.querySelector(".stars");
// let output = document.querySelector(".output");
// let stars = document.querySelectorAll(".star");

// stars.forEach((star, index) => {
//   star.starValue = index + 1;
//   star.addEventListener("click", starRate);
// });

// function starRate(e) {
//   output.innerHTML = `You Rated this ${e.target.starValue} stars`;
//   stars.forEach((star, index) => {
//     if (index < e.target.starValue) {
//       star.classList.add("orange");
//     } else {
//       star.classList.remove("orange");
//     }
//   });
// }

//Project 3
// let ele = document.querySelector(".container");

// ele.addEventListener("mouseover", (e) => { e.target.classList.add("active"); });
// ele.addEventListener("mouseout", (e) => { e.target.classList.remove("active"); });
// ele.addEventListener("mousemove", coordin);

// function coordin() {
//     let html = "X:" + event.clientX + " | Y:" + event.clientY;
//     document.getElementById("output").innerHTML = html;
// };

//Project 4
let output = document.querySelector(".output");
let message = document.querySelector(".message");
message.textContent = "Press to Start The Game";

let box = document.createElement("div");

let game = {
  timer: 0,
  start: null,
};

box.classList.add("box");
output.append(box);

box.addEventListener("click", (e) => {
  box.textContent = "";
  box.style.display = "none";
  game.timer = setTimeout(addBox, ranNum(3000));
  if (!game.start) {
    message.textContent = "Loading....";
  } else {
    let current = new Date().getTime();
    let duration = (current - game.start) / 1000;
    message.textContent = `It took ${duration} seconds to click`;
  }
});

function addBox() {
  message.textContent = "Click it!";
  game.start = new Date().getTime();
  box.style.display = "block";
  box.style.left = ranNum(450) + "px";
  box.style.top = ranNum(450) + "px";
}

function ranNum(max) {
  return Math.floor(Math.random() * max);
};
