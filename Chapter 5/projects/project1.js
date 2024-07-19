"use strict";

const finalTable = [];
const number = 13;

for (let i = 0; i < number; i++) {
    const temp = [];
    for (let j = 0; j < number; j++) {
        temp.push(i *j);
    }
    finalTable.push(temp);
};

console.table(finalTable);
