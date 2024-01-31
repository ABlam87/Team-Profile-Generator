const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

function managerPrompt () {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name for this project?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is that manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is that manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is that manager's office number?"
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager)
        optionsPrompt();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.error(error)
        } else {
          return console.log('Something went wrong, please try again!')
        }
    })
}

function engineerPrompt() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name for this project?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is that engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is that engineer's email address?",
        },
        {
            type: 'input',
            name: 'username',
            message: "What is that engineer's GitHub username?"
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username)
        employees.push(engineer)
        optionsPrompt();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.error(error)
        } else {
          return console.log('Something went wrong, please try again!')
        }
    })
}

function internPrompt() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name for this project?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is that intern's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is that intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is that intern's school?"
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(intern)
        optionsPrompt();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.error(error)
        } else {
          return console.log('Something went wrong, please try again!')
        }
    })
}

renderHTML = function() {
    const htmlContent = render(employees);
    fs.writeFileSync(outputPath, htmlContent);
    console.log('Team Generated!');
  }

optionsPrompt = function() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please choose an option to continue:',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
        },
    ])
    .then((answers) => {
        switch (answers.options) {
            case 'Add an Engineer':
                engineerPrompt();
                break;
        
            case 'Add an Intern':
                internPrompt();
                break;
        
            case 'Finish building the team':
                renderHTML();
                break;

            default:
                break;
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.error(error)
        } else {
          return console.log('Something went wrong, please try again!')
        }
    })
}

managerPrompt();