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
        // databasefunctions.  need to write code 
        break;

      case "Add role":
        databasefunctions.addRole();
        break;    
        
      case "Quit":
        process.exit();
    }

  });
}

startApp();






// if(answers.choices == "Show all employees") {
//   databasefunctions.showAllEmployees();
//   startApp();
// }
// else if (answers.choices == "Show all departments") {
//   databasefunctions.showAllDepartments();
// }
// else if (answers.choices == "Show all roles") {
//   databasefunctions.showAllRoles();
// }
// else if (answers.choices == "Add employee") {
//   inquirer.prompt(questions.newEmployeeQuestions).then(answers => {
//     console.log(answers); // need to finish adding id and manager id
//     databasefunctions.addEmployee(answers);
//   })
// }
//else if()






