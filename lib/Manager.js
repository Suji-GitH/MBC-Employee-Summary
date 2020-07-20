//Import Employee.js
const Employee = require("./Employee");

//Class Manager extended from class Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //Manager property
        this.officeNumber = officeNumber;
    };

    //Method to get Manager office number and role
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
};

//Export Manager.js
module.exports = Manager; 