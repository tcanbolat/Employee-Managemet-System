var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1990',
    database : "ems_db"
  });


  connection.query(`SELECT title FROM role;`, (err, res, fields) => {
		if (err) throw err;

		const roles = res.map(item => {
			const newItem = {
				name: item.title
			};
			return newItem;
    });
  });



const optionsList = [
    {
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: ["Show all employees", "Show all departments", "Show all roles", "Add employee", "Add department", "Add role", "Quit"]
      }
]

// const newEmployeeQuestions = [
//     {
//         type: "input",
//         name: "firstName",
//         message: "What is the employees first name?"
//       },
//       {
//         type: "input",
//         name: "lastName",
//         message: "What is the employees last name?"
//       },
//       {
//         type: "list",
//         name: "employeeRole",
//         message: "What is the employees role?",
//         choices: roles
//       },
//       {
//         type: "input",
//         name: "manager",
//         message: "Who is the employees Manager? - IF No Manager Leave Blank",
//         //choices: ["Director, Sales", "Manager, Sales", "Sales Rep", "finance director", "finance manager", "HR Director", "HR manager", "HR rep", "engineering director", "engineering manager", "engineer"]
//       }
// ]

module.exports = {
    optionsList,
    //newEmployeeQuestions
} 