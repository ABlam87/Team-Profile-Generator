const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

//PseudoCode
// Manager Info
// Initial Prompt w/ choices
//1 - add intern (new function, ending with Initial Prompt being called)
//2 - add engineer (new function, ending with Initial Prompt being called)
//3 - finish building team - render HTML
// constructors for each role, base being employee, and all others importing then extending employee


