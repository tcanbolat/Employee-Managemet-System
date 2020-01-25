const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const app = require("../app");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1990",
  database: "ems_db",
  multipleStatements: true
});

connection.connect();

const showAllEmployees = () => {
  connection.query(
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department, concat(e2.first_name, " ", e2.last_name) AS manager FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id) LEFT JOIN employee e2 on employee.manager_id = e2.id;',
    function(error, results, fields) {
      if (error) throw error;
      console.log("\n");
      console.table(results);
      console.log("\n");
      startApp();
    }
  );
};

const showAllDepartments = () => {
  connection.query("SELECT * FROM ems_db.department;", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("\n");
    console.table(results);
    console.log("\n");
    startApp();
  });
};

const showAllRoles = () => {
  connection.query("SELECT role.title, role.salary, department.department FROM role JOIN department ON (role.department_id = department.id);", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("\n");
    console.table(results);
    console.log("\n");
    startApp();
  });
};

const addEmployee = () => {
  connection.query(
    `SELECT title FROM role; SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title
    FROM employee JOIN role ON (employee.role_id = role.id)
    Where manager_id IS null;`,
    (err, res, fields) => {
      if (err) throw err;

      const listOfRoles = res[0].map(item => {
        const roles = {
          name: item.title
        };
        return roles;
      });

      const listOfManagers = res[1].map(item => {
        const managers = {
          name: item.Name,
          role: item.title
        };
        return managers;
      });

      listOfManagers.push("No Manager");

      inquirer
        .prompt([
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
            message: "Who is the employees Manager?",
            choices: listOfManagers
          }
        ])
        .then(answers => {
          var managerFirstName = answers.manager
            .split(" ")
            .slice(0, -1)
            .join(" ");
          var managerLastName = answers.manager
            .split(" ")
            .slice(-1)
            .join(" ");

          connection.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${answers.firstName}", "${answers.lastName}", (SELECT id FROM role 
        WHERE role.title = "${answers.employeeRole}"), (select id from  (SELECT * FROM employee) AS A 
        where id = (select id from  (SELECT * FROM employee) AS A
              where first_name = "${managerFirstName}" AND last_name = "${managerLastName}"
                          )));`,
            function(error, results, fields) {
              if (error) throw error;
              console.log("\n");
              console.log("Added " + answers.firstName + " " + answers.lastName + " to database.");
              console.log("\n");
              startApp();
            }
          );
        });
    }
  );
};

const addRole = () => {
  connection.query(
    `SELECT department.id, department.department FROM department;`,
    function(err, res) {
      if (err) throw error;

      const departmentList = res.map(item => {
        const departments = {
          name: item.department
        };
        return departments;
      });

      inquirer
        .prompt([
          {
            type: "input",
            name: "roleTitle",
            message: "What New Role would you like to add?"
          },
          {
            type: "input",
            name: "roleSalary",
            message: "what is the Roles Salary?",
            validate: function(val) {
              return /^[0-9]*$/i.test(val) || "Must only be numbers!";
            }
          },
          {
            type: "list",
            name: "roleDepartment",
            message: "what Departmnet does the Role belong to??",
            choices: departmentList
          }
        ])
        .then(answers => {
          connection.query(
            `INSERT INTO role (title, salary, department_id)
  VALUES("${answers.roleTitle}", "${answers.roleSalary}", (SELECT id FROM department
  WHERE department.department = "${answers.roleDepartment}"));`,
            function(err, res) {
              if (err) throw err;
              console.log("\n");
              console.log("Added " + answers.roleTitle + " as a new Role to database.");
              console.log("\n");
              startApp();
            }
          );
        });
    }
  );
};

const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new Department?"
    })
    .then(answer => {
      connection.query(
        `INSERT INTO department (department)
    VALUES("${answer.newDepartment}");`,
        function(err, res) {
          if (err) throw err;
          console.log("\n");
          console.log("Added " + answer.newDepartment + " as a new Department to database.");
          console.log("\n");
          startApp();
        }
      );
    });
};

const updateRole = () => {
  connection.query(
    `SELECT title FROM role; SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title
  FROM employee JOIN role ON (employee.role_id = role.id);`,
    function(err, res) {
      const listOfRoles = res[0].map(item => {
        const roles = {
          name: item.title
        };
        return roles;
      });

      const listOfEmployees = res[1].map(item => {
        const employees = {
          name: item.Name,
          title: item.title
        };
        return employees;
      });

      inquirer
        .prompt([
          {
            type: "list",
            name: "employeeChoice",
            message: "Who's Role would you like to change?",
            choices: listOfEmployees
          },
          {
            type: "list",
            name: "newRole",
            message: "Choose the employees new Role",
            choices: listOfRoles
          }
        ])
        .then(answers => {
          const employeeFirstName = answers.employeeChoice
            .split(" ")
            .slice(0, -1)
            .join(" ");
          const employeeLastName = answers.employeeChoice
            .split(" ")
            .slice(-1)
            .join(" ");

          connection.query(
            `UPDATE employee 
        SET role_id = (SELECT id FROM (SELECT * FROM role) AS A WHERE title = "${answers.newRole}") 
        WHERE id = (SELECT id from (SELECT * FROM employee) AS A 
        WHERE first_name = "${employeeFirstName}" 
        AND last_name = "${employeeLastName}");`,
            function(err, res) {
              if (err) throw err;
              console.log("\n");
              console.log("Updated role to: " + answers.newRole);
              console.log("\n");
              startApp();
            }
          );
        });
    }
  );
};

const quit = () => {
connection.end();
}

module.exports = {
  showAllEmployees,
  showAllDepartments,
  showAllRoles,
  addEmployee,
  addRole,
  addDepartment,
  updateRole,
  quit
};
