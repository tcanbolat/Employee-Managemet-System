const inquirer = require("inquirer");
const cTable = require('console.table');
const questions = require("./lib/questions.js");
const databasefunctions = require("./lib/databasefunctions.js");

const startApp = () => {
  inquirer
  .prompt(questions.optionsList)
  .then(answers => {
    switch (answers.choices) {

      case "Show all employees":
          databasefunctions.showAllEmployees();
          break;

      case "Show all departments":
        databasefunctions.showAllDepartments();
        break;

      case "Show all roles":
        databasefunctions.showAllRoles();
        break;

      case "Add employee":
          databasefunctions.addEmployee();      
        break;

      case "Add department":
        databasefunctions.addDepartment();
        break;

      case "Add role":
        databasefunctions.addRole();
        break;   

      case "Update employee role":
        databasefunctions.updateRole();
        break;
        
      case "Quit":
        process.exit();
    }

  });
}

startApp();






