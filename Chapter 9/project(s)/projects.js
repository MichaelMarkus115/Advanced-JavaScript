"use strict";

let output = document.querySelector(".output");
let mainList = output.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
let eles = document.querySelectorAll("div");
for (let i = 0; i < eles.length; i++) {
  console.log(eles[i].tagName);
  eles[i].id = "id" + (i + 1);
  if (i % 2) {
    eles[i].style.color = "red";
  } else {
    eles[i].style.color = "blue";
  }
}
