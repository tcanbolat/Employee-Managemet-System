


 --DISPLAY BY SALARY ASC
SELECT
employee.first_name, employee.last_name, role.title, role.salary
FROM employee JOIN role ON (employee.role_id = role.id)
ORDER BY salary ASC;

--Display all Employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department 
FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id);

--Display all departments
SELECT department.id, department.department
FROM department;

SELECT * FROM ems_db.department;


-- Add departments, roles, employees

-- View departments, roles, employees

-- Update employee roles











