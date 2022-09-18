// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./develop/utils/generateMarkdown.js");


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
            name: "license",
            message: "what license do you want to use",
            choices:["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
        },
        {
            type: "input",
            name: "Usage",
            message: "how does your app work?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your email?"
        },
        {
            type: "input",
            name: "username",
            message: "what is your Github username?"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your app?"
        },
        {
            type: "input",
            name: "contributing",
            message: "How to contribute?"
        },
        {
            type: "input",
            name: "testing",
            message: "What tests did you have?"
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
