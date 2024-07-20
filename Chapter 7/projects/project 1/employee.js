"use strict";

class Employee {
    constructor(firstName, lastName, noYearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.noYearsWorked = noYearsWorked;
    }

    //prototype method to return employee details
    employeeDetails() {
        return `${this.firstName} ${this.lastName} has worked for the company for ${this.noYearsWorked} years.`;
    }
};

//creating an instance
let employees = [
    new Employee("Michael", "van den Berg", 20),
    new Employee("Harvey", "Spectre", 25),
    new Employee("Mike", "Ross", 30)
];


employees.forEach(employee => {
    console.log(employee.employeeDetails());
});