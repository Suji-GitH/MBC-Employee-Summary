//Import Employee.js
const Employee = require("./Employee");

//Class Intern extended from class employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //Intern property
        this.school = school;
    };

    //Method to get Intern school and role
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
    
};

//Export Intern.js
module.exports = Intern; 