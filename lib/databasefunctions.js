var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1990',
    database : "ems_db"
  });


const showAllEmployees = () => {
    connection.connect();
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id);", function (error, results, fields) {
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

  const addEmployee = (answers) => {
    connection.connect();
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${answers.firstName}", "${answers.lastName}", 11, 10);`, function (error, results, fields) {
      if (error) throw error;
      console.log("\n");
      console.table(results);
      console.log("\n");
    });
    connection.end();
  }




  module.exports = {
    showAllEmployees,
    showAllDepartments,
    showAllRoles,
    addEmployee
 }