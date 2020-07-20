const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderFile = require("./lib/htmlRenderer");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const outputDIR = path.resolve(__dirname, "output");
const dirPath = path.join(outputDIR, "team.html");

const teamArray = [];

//Prompt user for Team Role
const employeeDetails = async () => {
    const response = await inquirer.prompt([
            {
                type: "list",
                message: "Select an employee role to input details",
                name: "employeeType",
                choices: ["Manager", "Engineer", "Intern", "Finish"],
            },
    ]);

    //Execute employee details function depending on the type
    switch (response.employeeType) {
        case "Manager":
        return managerPrompt();

        case "Engineer":
        return engineerPrompt();
    
        case "Intern":
        return internPrompt();
    
        case "Finish":
        return generateHTML(dirPath, renderFile(teamArray));
        
    };
};

//Get Manager details from User
const managerPrompt = async () => {
    const response = await inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager's id",
            name: "id",
        },
        {
            type: "input",
            message: "Enter Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Enter manager's office number",
            name: "number",
        },
    ]);

    let manager = new Manager(response.name, response.id, response.email, response.number);
    teamArray.push(manager);

    employeeDetails();
};

//Get Engineer details from User
const engineerPrompt = async () => {
const response = await inquirer.prompt([
    {
        type: "input",
        message: "Enter Engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Engineer's id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter Engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Engineer's GitHub Username",
        name: "GitHub",
    },
]);

let engineer = new Engineer(response.name, response.id, response.email, response.GitHub);
teamArray.push(engineer);

employeeDetails();
};

//Get Interns details from User
const internPrompt = async () => {
    const response = await inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Intern's id",
            name: "id",
        },
        {
            type: "input",
            message: "Enter Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Intern's school",
            name: "school",
        },
    ]);
    
    let intern = new Intern(response.name, response.id, response.email, response.school);
    teamArray.push(intern);

    employeeDetails();
    };

// write the answers to a new README file
const generateHTML = (fileName, data) => {
    fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
        throw err;
    }
    console.log("Employee Summary Complete");
    });
};

//Initiate Prompt
employeeDetails();
