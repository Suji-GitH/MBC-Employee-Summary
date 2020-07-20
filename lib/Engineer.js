//Import Employee.js
const Employee = require("./Employee");

//Class Engineer extended from class employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //engineer property
        this.github = github;
    };

    //Method to get Engineer github and role
    getGithub() {
       return this.github;
    }

    getRole() {
       return "Engineer";
    }
    
};

//Export Engineer.js
module.exports = Engineer; 