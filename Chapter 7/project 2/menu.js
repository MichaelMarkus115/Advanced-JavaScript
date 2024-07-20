"use strict";

class Menu {
    constructor(qItem1, qItem2) {
        let pItem1 = 5; //price of item 1
        let pItem2 = 8; //price of item 2

        this.qItem1 = qItem1;
        this.qItem2 = qItem2;

        this.calculateCost = function () {
            return (this.qItem1 * pItem1) + (this.qItem2 * pItem2); 
        };
    };

    //getter property to retrieve total cost
    get totalCost() {
        return this.calculateCost();
    };
};


//create instances
let order1 = new Menu(2,3);
let order2 = new Menu(10, 4);
let order3 = new Menu(6, 9);

//output total cost
console.log("Total cost of order 1:", order1.totalCost);
console.log("Total cost of order 2:", order2.totalCost);
console.log("Total cost of order 3:", order3.totalCost);