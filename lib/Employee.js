//Import inquirer
const inquirer = require("./inquirer");

//Class Employee
class employee {
    constructor(name, id, email) {
        //Employee Properties
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //Method to get Employee name. id, email, and role
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "employee";
    
};

//Export Employee.js
module.exports = employee; 