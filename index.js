//getting the packages from node modules
const inquirer = require("inquirer");
const fs = require("fs");

// generating questions for user to answer
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
    choices: ["MIT", "mpl-2.0", "Artistic-2.0", "cc-by-sa-4.0", "APACHE-2.0"],
  },
];

// created a function to write using filesystem
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }

    console.log("Completed");
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("running");
// using inquirer to prompt questions to users using question array
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
// creating a badge link 
      var badge = `https://img.shields.io/badge/license-${data.license}-green`
      // creating a github link
      var githubLink = `https://www.github.com/${data.gitHubUsername}`
      // creatong a mailto link
      var email = `mailto:${data.email}`
// created table of contents 
      var tableOfContents =`
# Table Of Contents
* [Instructions](#instructions)
* [Information](#information)
* [Guidelines](#guidelines)
* [Questions](#questions)
* [License](#license)
      
      
      `;
      // getting everything in one string using the md file syntax
      var  readME = "";



      readME = `
# Title !["badge"](${badge})
${data.title}

# Description
${data.description}

${tableOfContents}

# [Instructions](#instructions)
${data.instructions}

# [Information](#information)
${data.information}

# [Guidelines](#guidelines)
${data.guidelines}

# [Questions](#questions)
## If any questions, please reach me out on the github or on the specified email address.
  Github Username:
  [${data.gitHubUsername}](${githubLink})

  Email Address:
  [${data.email}](${email})

# [License](#license)
${data.license}      
      `;

      writeToFile("custom.md", readME);


    })
    //catching the error if any
    .catch((err) => {
      console.log(err);
    });

}
// Function call to initialize app
init();
