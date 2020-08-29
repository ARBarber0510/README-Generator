const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What i?"
    },
    {
      type: "input",
      name: "Description",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "What is your favorite hobby?"
    },
    {
      type: "input",
      name: "Installation",
      message: "What is your favorite food?"
    },
    {
      type: "input",
      name: "Usage",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "Licensing",
      message: "Enter your LinkedIn URL."
    },
    {
        type: "input",
        name: "Licensing",
        message: "Enter your LinkedIn URL."
    },
    {
        type: "input",
        name: "Contribution",
        message: "Enter your LinkedIn URL."
    },
    {
        type: "input",
        name: "Test",
        message: "Enter your LinkedIn URL."
    },
    {
        type: "input",
        name: "Questions",
        message: "Enter your LinkedIn URL."
      }
  ]);
}