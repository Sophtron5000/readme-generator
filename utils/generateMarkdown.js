// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  var expression = data.license;
switch (expression) {
  case 'MIT':
    expression = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    break;
  case 'GPL 3.0':
    expression = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    break;
  default:
    expression = "";
}
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink() {
//   const licenseLink = renderLicenseBadge(license);
//   switch (licenseLink) {
//     case 'MIT':
//       licenseLink = `[License: MIT](https://opensource.org/licenses/MIT)`;
//       break;
//     case 'GPL 3.0':
//       licenseLink = `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
//       break;
//     default:
//       licenseLink = "";
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection() {
//   const licenseSection = renderLicenseLink(license);
//   switch (licenseSection) {
//     case 'MIT':
//       licenseSection = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//       break;
//     case 'GPL 3.0':
//       licenseSection = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
//       break;
//     default:
//       licenseSection = "";
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description
  
    ${data.description}
  
    ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing) 
  * [Test](#test)
  
  
  ## Installation
  
  ${data.instillation}
  
  
  ## Usage 
  
  ${data.usage}
  
  
  ## Credits
  
  ${data.yourName}
  * [Email](${data.email})
  * [GitHub](${data.github})
  * [LinkedIn](${data.linkedin})
    
  ## Contributing
  
  If you would like to contribute to this code please email me for instructions on how: 
  [${data.yourName}](${data.email})
  
  ## Tests
  
  If you would like instruction on how to test, please email me: 
  [${data.yourName}](${data.email})
`;
}

module.exports = generateMarkdown;
