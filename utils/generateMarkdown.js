// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ()
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description
  
    ${data.description}
  
  ${data.license}

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
