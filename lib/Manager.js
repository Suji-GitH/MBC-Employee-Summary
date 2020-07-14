//Import Employee.js
const employee = require("./Employee");

//Class Manager extended from class employee
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        //call functions on an object's parent (Employee)
        super(name, id, email);
        //Manager property
        this.officeNumber = officeNumber;
    };

    //Method to get manager office number and role
    getOfficeNumber = () => this.officeNumber;
    getRole = () => "manager";
    
};

//Export manager.js
module.exports = manager; 