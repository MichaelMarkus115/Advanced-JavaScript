// "use strcit";

// ///////////////LOCAL FILE STORAGE///////////////////
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

// UPLOADING FILES//
// let message = document.getElementById("message");
// function uploadFile(files) {
//   for (let i = 0; i < files.length; i++) {
//     message.innerHTML += files[i].name + "<br>";
//   }
// }

// READING FILES//
// let message = document.getElementById("message");
// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
// }

// GETTING POSITION DATA WITH GeoLocation
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

// window.onload = init; // add this line to the start of the script

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 700;
// canvas.height = 700;

// function init() {
//   canvas.addEventListener("mousemove", draw);
//   canvas.addEventListener("mousemove", setPosition);
//   canvas.addEventListener("mouseenter", setPosition);
// }

// let pos = {
//   x: 0,
//   y: 0,
// };

// function setPosition(e) {
//   pos.x = e.pageX;
//   pos.y = e.pageY;
// }

// function draw(e) {
//   if (e.buttons !== 1) return;
//   ctx.beginPath();
//   ctx.moveTo(pos.x, pos.y);
//   setPosition(e);
//   ctx.lineTo(pos.x, pos.y);
//   ctx.lineWidth = 10;
//   ctx.lineCap = "round";
//   ctx.stroke();
// }

// let bgColor = "pink";
// let bgC = document.getElementById("bgColor");
// bgC.addEventListener("change", function () {
//   bgColor = event.target.value;
// });

// ////Project 1/////////
// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");  
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "400");
// document.body.prepend(canvas);
// let colVal = [];
// for (let x = 0; x < 50; x++) {
//   colVal.push(0);
// }
// function matrix() {
//   ctx.fillStyle = "rgba(0,0,0,.05)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "green";
//   colVal.map((posY, index) => {
//     let output = Math.random() < 0.5 ? 0 : 1;
//     let posX = index * 10 + 10;
//     ctx.fillText(output, posX, posY);
//     if (posY > 100 + Math.random() * 400) {
//       colVal[index] = 0;
//     } else {
//       colVal[index] = posY + 10;
//     }
//   });
// }
// setInterval(matrix, 50);

// Project 2//
// let endDate = document.querySelector("input[name='endDate']");
// let clock = document.querySelector(".clock");
// let timeInterval;
// let timeStop = true;
// let savedValue = localStorage.getItem("countdown") || false;
// if (savedValue) {
//   startClock(savedValue);
//   let inputValue = new Date(savedValue);
//   endDate.valueAsDate = inputValue;
// }
// endDate.addEventListener("change", function (e) {
//   e.preventDefault();
//   clearInterval(timeInterval);
//   let temp = new Date(endDate.value);
//   localStorage.setItem("countdown", temp);
//   startClock(temp);
//   timeStop = true;
// });
// function startClock(d) {
//   function updateCounter() {
//     let tl = timeLeft(d);
//     if (tl.total <= 0) {
//       timeStop = false;
//     }
//     for (let pro in tl) {
//       let el = clock.querySelector("." + pro);
//       if (el) {
//         el.innerHTML = tl[pro];
//       }
//     }
//   }
//   updateCounter();
//   if (timeStop) {
//     timeInterval = setInterval(updateCounter, 1000);
//   } else {
//     clearInterval(timeInterval);
//   }
// }
// function timeLeft(d) {
//   let currentDate = new Date();
//   let t = Date.parse(d) - Date.parse(currentDate);
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// Project 3
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let penColor = document.querySelector("#penColor");
let penWidth = document.querySelector("#penWidth");
let btnSave = document.querySelector(".save");
let btnClear = document.querySelector(".clear");
let output = document.querySelector(".output");
let mLoc = {
  draw: false,
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0,
};
canvas.style.border = "1px solid black";
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);
canvas.addEventListener("mousemove", (e) => {
  mLoc.lastX = mLoc.x;
  mLoc.lastY = mLoc.y;
  //console.log(e);
  mLoc.x = e.clientX;
  mLoc.y = e.clientY;
  draw();
});
canvas.addEventListener("mousedown", (e) => {
  mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
  mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
  mLoc.draw = false;
});
function saveImg() {
  let   dataURL = canvas.toDataURL();
  console.log(dataURL);
  let   img = document.createElement("img");
  output.prepend(img);
  img.setAttribute("src", dataURL);
  let   link = document.createElement("a");
  output.append(link);
  let fileName = Math.random().toString(16).substr(-8) + ".png";
  link.setAttribute("download", fileName);
  link.href = dataURL;
  link.click();
  output.removeChild(link);
}
function clearCanvas() {
  let temp = confirm("clear canvas?");
  if (temp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
function draw() {
  if (mLoc.draw) {
    ctx.beginPath();
    ctx.moveTo(mLoc.lastX, mLoc.lastY);
    ctx.lineTo(mLoc.x, mLoc.y);
    ctx.strokeStyle = penColor.value;
    ctx.lineWidth = penWidth.value;
    ctx.stroke();
    ctx.closePath();
  }
}


// //Local file reader//
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerHTML = "Good to go!";
// } else {
//   message.innerHTML = "No File Reader";
// };

// Uploading Files//
// let message = document.getElementById("message");

// function uploadFiles(files) {
//   console.log(files[0]);
//   message.innerHTML = files[0].name;
// };

// let message = document.getElementById("message");

// function uploadFile(files) {
//   for (let i = 0; i < files.length; i++) {
//     message.innerHTML += files[i].name + "<br>";
//   }
// }

// Reading Files//
// let message = document.getElementById("message");

// function uploadAndReadFile(files) {
//   let fr = new fileRader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
// }

// //14.1//