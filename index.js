// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMeFile = "README.md"
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["Please enter your project title:",
    "Please enter a description for your project:",
    "Please enter the installation instructions for your application:",
    "Please enter the command to run your code:",
    "Please enter the guidelines for contributing to the project:",
    "Please enter testing instructions:",
    "Please select your license:",
    "Please enter your GitHub user name:",
    "Please enter your email address:"];
const licenses = ["Apache 2.0 License", "BSD 2-Clause License", "BSD 3-Clause License",
    "GNU GPL v2", "GNU GPL v3", "The MIT License", "Mozilla Public License 2.0"];

// TODO: Create a function to initialize app
async function init() {
    try {
        response = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: questions[0],
                    name: 'title',
                },
                {
                    type: 'input',
                    message: questions[1],
                    name: 'description',
                },
                {
                    type: 'input',
                    message: questions[2],
                    name: 'installation',
                },
                {
                    type: 'input',
                    message: questions[3],
                    name: 'usage',
                },
                {
                    type: 'input',
                    message: questions[4],
                    name: 'contributing',
                },
                {
                    type: 'input',
                    message: questions[5],
                    name: 'tests',
                },
                {
                    type: 'rawlist',
                    name: 'license',
                    message: questions[6],
                    choices: [licenses[0], licenses[1], licenses[2], licenses[3], licenses[4],
                    licenses[5], licenses[6]],
                },
                {
                    type: 'input',
                    message: questions[7],
                    name: 'username',
                },
                {
                    type: 'input',
                    message: questions[8],
                    name: 'email',
                },
            ]);
            var markdown = generateMarkdown(response);
        fs.writeFile(readMeFile, markdown, (err) =>
            err ? console.error(err) : console.log('Success!')
        );

        //console.log("Markdown: " + generateMarkdown(response));
    }
    catch (error) {
        console.error("Any error::", error);
    }

}//init()


// Function call to initialize app
init();
// include(
//     'utils/generateMarkdown.js');
