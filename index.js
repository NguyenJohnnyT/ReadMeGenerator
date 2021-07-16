// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the app?', //0
    'Give a one line description of the app.', //1
    'In a few sentences, tell the user what the app does.', //2
    'What is the link to the repository?', //3
    'What is the link to the deployed website?', //4
    'How would you instruct the user to use this application?', //5
    'How many sources would you like to credit?', //6
];

const licenses = ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']

let arrQuestions 
for (let i = 0; i<questions.length; i++) {
    if (i === questions.length-1) {
        let obj = {
            type: 'number',
            message: questions[i],
            name: i
        }
        arrQuestions = [...arrQuestions, obj]
    } else {
        let obj = {
            type: 'input',
            message: questions[i],
            name: i
        }
        arrQuestions = [...arrQuestions, obj]
    }
}

arrQuestions = [...arrQuestions, { //add license
    type: 'choices',
    message: 'Choose a license',
    choices: licenses,
    name: '7'
}]

// TODO: Create a function to write README file

fileName = `README_${placeholder}.md`
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
        arrQuestions
    )
    .then (response) {
        return
    }
}

// Function call to initialize app
init();
