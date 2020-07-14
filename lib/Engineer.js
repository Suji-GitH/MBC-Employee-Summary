//Import Employee.js
const employee = require("./Employee");

//Class Engineer extended from class employee
class engineer extends employee {
    constructor(name, id, email, github) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //engineer property
        this.github = github;
    };

    //Method to get Engineer github and role
    getGithub = () => this.github;
    getRole = () => "engineer";
    
};

//Export Engineer.js
module.exports = engineer; 