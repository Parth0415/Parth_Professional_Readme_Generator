// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the title of the project?",
    name: "title",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description of your project?",
  },
  {
    type: "input",
    name: "instructions",
    message: "Please enter the installation instructions?",
  },

  {
    type: "input",
    name: "information",
    message: "Please enter the usage information?",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Please enter the contribution guidelines?",
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "Please enter your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your valid email address?",
  },
  {
    type: "list",
    message: "Please choose one from the following project license:",
    name: "license",
    choices: [
      "MIT",
      "mpl-2.0",
      "Artistic-2.0",
      "cc-by-sa-4.0",
      "APACHE-2.0",
    ],
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

console.log('running');


inquirer.prompt(questions).then((data)=>{

    console.log(data);



    }).catch((err)=>{
        console.log(err);
    });


  
}

// Function call to initialize app
init();
