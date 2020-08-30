const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project:"
    },
    {
      type: "input",
      name: "Installation",
      message: "What are the installation steps for your project?"
    },
    {
      type: "input",
      name: "Usage",
      message: "Please provide instructions & examples for this application in use:"
    },
    {
      type: "input",
      name: "Licensing",
      message: "Please select your license:",
      choices: [

      ]
    },
    {
        type: "input",
        name: "Contribution",
        message: "Please include any contributors to your project:"
    },
    {
        type: "input",
        name: "Test",
        message: "Please describe the tests for your application:"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username."
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Please provide your email address:"
      }
  ]);
}