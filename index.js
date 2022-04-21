// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = inquirer
.prompt([
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
    type: 'input',
    name: 'license',
    message: 'which license/badge? list of badge urls, a few to choose from',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'please enter...checkbox?',
  },
  {
    type: 'input',
    name: 'instillation',
    message: 'Please write instillation guide',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please write contribution guide',
  },
  {
    type: 'input',
    name: 'test',
    message: 'how to test',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'how to answer questions, enter email',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
])
.then((answers) => {
    const readMePageContent = generateReadMe(answers);

// TODO: Create a function to write README file
const generateReadMe = (answers) => {
    generateTitle(answers) => {
        return (`#${answers.title}`)
    };
    generateDescription(answers) => {
        return (`##Description
                 ${answers.description}`)
    };
    generateLicense(answers) => {
        return (`##License
                 ${answers.license}`)
    };
    generateTableOfContents(answers) => {
        return (`##Table of Contents
                 ${answers.tableOfContents}`)
    };
    generateInstillation(answers) => {
        return (`##Instillation
                 ${answers.instillation}`)
    };
    generateContribution(answers) => {
        return (`##Contribution
                 ${answers.contribution} 
                 ${answers.yourName}
                 ${answers.github}
                 ${answers.linkedin}`)
    };
    generateTest(answers) => {
        return (`##Test
                 ${answers.test}`)
    };
    generateQuestions(answers) => {
        return (`##Questions
                 ${answers.questions}`)
    };
}



//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;


// TODO: Create a function to initialize app
function init() {
  fs.writeFile('user.md', readMePageContent, (err) =>
err ? console.log(err) : console.log('Successfully created a read me!')
);
//not sure where this goes but need to call on function created
generateTitle() 
generateDescription()
generateLicense()
generateTableOfContents()
generateInstillation()
generateContribution()
generateTest()
generateQuestions()
}

// Function call to initialize app
init();
