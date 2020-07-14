//Import Employee.js
const employee = require("./Employee");

//Class Intern extended from class employee
class intern extends employee {
    constructor(name, id, email, school) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //Intern property
        this.school = school;
    };

    //Method to get intern school and role
    getSchool = () => this.school;
    getRole = () => "intern";
    
};

//Export intern.js
module.exports = intern; 