// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the app?',
    'Give a one line description of the app.',
    'In a few sentences, tell the user what the app does.',
    'What is the link to the repository?',
    'What is the link to the deployed website?',
    'How would you instruct the user to use this application?',
    'How many sources would you like to credit?',
];

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
