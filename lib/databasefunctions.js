const mysql = require('mysql');
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1990',
    database : "ems_db",
    multipleStatements: true
  });


const showAllEmployees = () => {
    connection.connect();
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department, concat(e2.first_name, " ", e2.last_name) AS manager FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id) LEFT JOIN employee e2 on employee.manager_id = e2.id;', function (error, results, fields) {
      if (error) throw error;
      console.log("\n");
      console.table(results);
      console.log("\n");
    });
    connection.end();
  }
  
  const showAllDepartments = () => {
    connection.connect();
    connection.query("SELECT * FROM ems_db.department;", function (error, results, fields) {
      if (error) throw error;
      console.log("\n");
      console.table(results);
      console.log("\n");
    });
    connection.end();
  }

  const showAllRoles = () => {
    connection.connect();
    connection.query("SELECT * FROM ems_db.role;", function (error, results, fields) {
      if (error) throw error;
      console.log("\n");
      console.table(results);
      console.log("\n");
    });
    connection.end();
  }

  const addEmployee = () => {
    connection.connect();           

    connection.query(`SELECT title FROM role; SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title, manager_id
    FROM employee JOIN role ON (employee.role_id = role.id)
    Where manager_id IS null;`, (err, res, fields) => {
      if (err) throw err;
  
      const listOfRoles = res[0].map(item => {
        const roles = {
          name: item.title
        };
        return roles;
      })
     
      const listOfManagers = res[1].map(item => {
        const managers = {
          name: item.Name
        };
        return managers;
      })

      inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
          },
          {
            type: "list",
            name: "employeeRole",
            message: "What is the employees role?",
            choices: listOfRoles
          },
          {
            type: "list",
            name: "manager",
            message: "Who is the employees Manager? - IF No Manager Leave Blank",
            choices: listOfManagers
          }
    ]).then( answers => {
                
      var managerFirstName = answers.manager.split(' ').slice(0, -1).join(' ');
      var managerLastName = answers.manager.split(' ').slice(-1).join(' ');
  
      connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${answers.firstName}", "${answers.lastName}", (SELECT id FROM role 
        WHERE role.title = "${answers.employeeRole}"), (select id from  (SELECT * FROM employee) AS A 
        where id = (select id from  (SELECT * FROM employee) AS A
              where first_name = "${managerFirstName}" AND last_name = "${managerLastName}"
                          )));`, function (error, results, fields) {
        if (error) throw error;
        console.log("\n");
        console.table(results);
        console.log("\n");
      });
      connection.end();
    })
    });
  }






  module.exports = {
    showAllEmployees,
    showAllDepartments,
    showAllRoles,
    addEmployee
 }


