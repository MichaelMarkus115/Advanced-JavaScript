"use strcit";

///////////////LOCAL FILE STORAGE///////////////////
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :(";
// };

// let message = document.getElementById("message");
// function uploadFile(files) {
//   console.log(files[0]);
//   message.innerText = files[0].name;
// }

//UPLOADING FILES//
// let message = document.getElementById("message");
// function uploadFile(files) {
//   for (let i = 0; i < files.length; i++) {
//     message.innerHTML += files[i].name + "<br>";
//   }
// }

//READING FILES//
// let message = document.getElementById("message");
// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
// }

//GETTING POSITION DATA WITH GeoLocation
// window.onload = init;
// function init() {
// console.dir(navigator.geolocation);
// }

// window.onload = init;
// function init() {
// navigator.geolocation.getCurrentPosition(showGeoPosition);
// }
// function showGeoPosition(data) {
// console.dir(data);
// }

// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d");
// canvas.width = 500; //px
// canvas.height = 500; //px
// ctx.fillStyle = "pink";
// ctx.fillRect(20, 40, 100, 100);

// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 100;
// canvas.height = 100;
// ctx.lineWidth = 2;
// ctx.moveTo(0, 20);
// ctx.lineTo(50, 100);
// ctx.stroke();

// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 150;
// canvas.height = 200;
// ctx.beginPath();
// ctx.arc(75, 100, 50, 0, Math.PI * 2);
// ctx.stroke();

// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// ctx.font = "24px Arial";
// let txt = "Hi canvas!";
// ctx.fillText(txt, 10, 35);

// window.onload = function () {
//   let canvas = document.getElementById("c1");
//   canvas.height = 300;
//   canvas.width = 300;
//   let ctx = canvas.getContext("2d");
//   let myImage = document.getElementById("flower");
//   ctx.drawImage(myImage, 10, 10);
// };

// let canvas1 = document.getElementById("canvas1");
// let ctx1 = canvas1.getContext("2d");
// ctx1.strokeRect(5, 5, 150, 100);

// let canvas2 = document.getElementById("canvas2");
// let ctx2 = canvas2.getContext("2d");
// ctx2.beginPath();
// ctx2.arc(60, 60, 20, 0, 2 * Math.PI);
// ctx2.stroke();

// let canvas3 = document.getElementById("canvas3");
// let ctx3 = canvas3.getContext("2d");
// ctx3.drawImage(canvas1, 10, 10);
// ctx3.drawImage(canvas2, 10, 10);

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let imgLoader = document.getElementById("imgLoader");
// imgLoader.addEventListener("change", upImage, false);
// function upImage() {
// let fr = new FileReader();
// fr.readAsDataURL(event.target.files[0]);
// fr.onload = function (e) {
// let img = new Image();
// img.src = event.target.result;
// img.onload = function () {
// canvas.width = img.width;
// canvas.height = img.height;
// ctx.drawImage(img, 0, 0);
// };
// console.log(fr);
// };
// }

window.onload = init; // add this line to the start of the script

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

function init() {
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousemove", setPosition);
  canvas.addEventListener("mouseenter", setPosition);
}

let pos = {
  x: 0,
  y: 0,
};

function setPosition(e) {
  pos.x = e.pageX;
  pos.y = e.pageY;
}

function draw(e) {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.stroke();
}

let bgColor = "pink";
let bgC = document.getElementById("bgColor");
bgC.addEventListener("change", function () {
  bgColor = event.target.value;
});
