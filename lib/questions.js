const optionsList = [
    {
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: ["Show all employees", "Show all departments", "Show all roles", "Add employee", "Add department", "Add role", "Quit"]
      }
]

const newEmployeeQuestions = [
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
        name: "role",
        message: "What is the employees role?",
        choices: ["sales director", "sales manager", "sales rep", "finance director", "finance manager", "HR Director", "HR manager", "HR rep", "engineering director", "engineering manager", "engineer"]
      }
]

module.exports = {
    optionsList,
    newEmployeeQuestions
} 