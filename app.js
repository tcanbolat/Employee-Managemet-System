const inquirer = require("inquirer");
const cTable = require('console.table');
const questions = require("./lib/questions.js");
const databasefunctions = require("./lib/databasefunctions.js");


const startApp = () => {
  inquirer
  .prompt(questions.optionsList)
  .then(answers => {
    if(answers.choices == "Show all employees") {
      databasefunctions.showAllEmployees();
    }
    else if (answers.choices == "Show all departments") {
      databasefunctions.showAllDepartments();
    }
    else if (answers.choices == "Show all roles") {
      databasefunctions.showAllRoles();
    }
    else if (answers.choices == "Add employee") {
      inquirer.prompt(questions.newEmployeeQuestions).then(answers => {
        console.log(answers); // need to finish adding id and manager id
        databasefunctions.addEmployee(answers);
      })
    }
    //else if()
  });
}

startApp();

