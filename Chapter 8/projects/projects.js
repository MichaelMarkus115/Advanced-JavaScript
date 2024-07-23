"use strict";

////////////8.1//////////////
let word = "pie";

function scramble(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    };
    return temp;
};

console.log(scramble(word));


/////////////////8.2/////////////////
let endDate = "Sept 1 2022";

function countdown() {
    let total = Date.parse(endDate) - new Date();
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    let mins = Math.floor((total / 1000 / 60) % 60);
    let secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}

function update() {
    let temp = countdown();
    let output = "";
    for (let property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}

update();
