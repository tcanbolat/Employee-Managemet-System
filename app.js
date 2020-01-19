var mysql = require('mysql');
const inquirer = require("inquirer");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1990',
  database : "ems_db"
});
 
 
const showEmp = () => {
  connection.connect();
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary FROM employee JOIN role ON (employee.role_id = role.id) ORDER BY salary ASC;", function (error, results, fields) {
    if (error) throw error;
    console.table(results);
  });
  connection.end();
}


inquirer
  .prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: ["Show all employees", "Quit"]
    }  ])
  .then(answers => {
    if(answers.choices == "Show all employees") {
      showEmp();
    }
  });
