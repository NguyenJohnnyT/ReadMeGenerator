// * Import packages
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js');
// * Array of questions and licenses
const questions = [
    'What is the name of the app?', //0
    'Give a one line description of the app.', //1
    'In a few sentences, tell the user what the app does.', //2
    'What is your github username?', //3
    'What is the link to the deployed website?', //4
    'How would you instruct the user to use this application?', //5
    'Guildelines for contributors?', //6
    'Any tests to include for the user?', //7
    'Enter an email for contact.' //8
    //Choice of licenses //9
];
const licenses = ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']

// * Setting question array to array of objects for inquirer
let arrQuestions = []
for (let i = 0; i<questions.length; i++) {
    let obj = {
        type: 'input',
        message: questions[i],
        name: i.toString()
    }
    arrQuestions = [...arrQuestions, obj]
}

arrQuestions = [...arrQuestions, { //add license
    type: 'list',
    message: 'Choose a license',
    choices: licenses,
    name: '9'
}]

// * function to create file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log("Markup success!")
        }
    )
}

// *init function for developer to use to create readme file
function init() {
    inquirer
    .prompt(
        arrQuestions //prompt questions
    )
    .then ((response) => {
        const {0:title, 1:subtitle, 2:descr, 3:repoLink, 4:deployLink, 5:instructions, 6:contributions, 7:tests, 8:questions, 9:license} = response; //object destructuring
        const licenseBadge = genMD.generateMarkdown(license) //create license const
        fileName = `${title}_README.md`; //create filename
        // * Template for README
        templateReadMe = `
${licenseBadge}
# ${title}
${subtitle}

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Description

${descr}

## Installation

[Github Link](https://www.github.com/${repoLink}) \n
[Deployed Website Link](${deployLink})

## Usage

${instructions}

## License

This application is licensed under ${license}.  Click the badge above to read the documentation.

## Contributors

${contributions}

## Tests

${tests}

## Questions
Have a question? Please email me at ${questions}
`
        writeToFile(fileName, templateReadMe)
    })
}

// * Function call to initialize app
init();
