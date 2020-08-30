const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation steps for your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions & examples for this application in use:"
    },
    {
      type: "input",
      name: "licensing",
      message: "What is the license?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please include any contributors to your project:"
    },
    {
        type: "input",
        name: "test",
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
  ];

  function generateMD(answers) {
    return `
# ${answers.title}

## Description
  ${answers.description}

## Table of Contents
  * Installation
  * Usage
  * License
  * Contributers
  * Tests
  * Questions
  
## Installation
    ${answers.installation}

## Licensing
    ${answers.licensing}

## Contributors
    ${answers.contribution}

## Tests
    ${answers.test}

## Questions
    Please visit [https://github.com/${answers.githubUsername}](https://github.com/${answers.githubUsername}) for more information.
    Any additional questions may be sent to [${answers.emailAddress}](${answers.emailAddress})
    `
  }

  inquirer
  .prompt(questions)
  .then(function(answers) {
    const md = generateMD(answers);

    return writeFileAsync("README.md", md);
    // console.log(answers);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });