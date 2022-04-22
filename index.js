// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
 {
    type: 'input',
    name: 'yourName',
    message: 'What is your your first and last name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your preferred email?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description...',
  },
  {
    type: 'list',
    name: 'license',
    message: 'which license/badge? list of badge urls, a few to choose from',
    choices: ['MIT', 'GPL 3.0']
  },
  {
    type: 'input',
    name: 'instillation',
    message: 'Please write instillation guide',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please write usage guide',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Repo URL',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('NewREADME.md', generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
