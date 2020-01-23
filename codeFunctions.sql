
-- display all Employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department, concat(e2.first_name, " ", e2.last_name) AS manager
FROM employee JOIN role ON (employee.role_id = role.id)
	JOIN department ON (role.department_id = department.id)
	LEFT JOIN employee e2 on employee.manager_id = e2.id;


--Display all departments
SELECT * FROM department;

--display all roles
SELECT * FROM ems_db.role;


-- display all managers
SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title
FROM employee JOIN role ON (employee.role_id = role.id)
Where manager_id IS null;

--Add Employee
SELECT title FROM role; -- Get all the roles to list them out as options for employee role

SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title
FROM employee JOIN role ON (employee.role_id = role.id)
Where manager_id IS null;  -- Get all the managers to choose a manager for employee

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("${answers.firstName}", "${answers.lastName}", 
(SELECT id FROM role
WHERE role.title = "${answers.employeeRole}"), 
(SELECT id FROM (SELECT * FROM employee) AS A
WHERE id = (select id FROM (SELECT * FROM employee) AS A
WHERE first_name = "${managerFirstName}" AND last_name = "${managerLastName}")));

--Add Role
SELECT department.id, department.department FROM department; --Get all departments from db to list as options for new Role.

INSERT INTO role (title, salary, department_id)
VALUES("${answers.roleTitle}", "${answers.roleSalary}", (SELECT id FROM department
WHERE department.department = "${answers.roleDepartment}"));

--Add Department
INSERT INTO department (department)
VALUES("${answer.newDepartment}");

--Update employee roles
