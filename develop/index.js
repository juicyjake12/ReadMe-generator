// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
function userInput(){
   return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project Title?"
        },
        {
            type: "input",
            name: "Description",
            message: "What is your project description?"
        },
        {
            type: "list",
            name: "License",
            message: "what license do you want to use",
            choices:["The MIT License", "The GPL License", "GNU License", "N/A"]
        },
        {
            type: "input",
            name: "Usage",
            message: "how does your app work?"
        },
        {
            type: "input",
            name: "Email",
            message: "what is your email?"
        },
        {
            type: "input",
            name: "Git",
            message: "what is your Github username?"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your app?"
        }

    ]
)
}

 
// function to write README file
function writeToFile(fileName, data) {
    fileName = "README";
    fs.appendFile(`${fileName}`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
