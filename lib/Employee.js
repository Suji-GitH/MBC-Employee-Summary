//Class Employee
class Employee {

    constructor(name, id, email) {
        //Employee Properties
        this.name = name;
        this.id = id;
        this.email = email;
        
    };

    //Method to get Employee name. id, email, and role
    getName() {
       return this.name; 
    }

    getId() {
        return this.id;
    } 

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
    
};

//Export Employee.js
module.exports = Employee; 