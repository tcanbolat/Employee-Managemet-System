

-- Add departments, roles

-- View departments, roles, employees

-- Update employee roles




-- display all
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department, concat(e2.first_name, " ", e2.last_name) AS manager
FROM employee JOIN role ON (employee.role_id = role.id)
JOIN department ON (role.department_id = department.id)
LEFT JOIN employee e2 on employee.manager_id = e2.id;

 --DISPLAY BY SALARY ASC
SELECT
employee.first_name, employee.last_name, role.title, role.salary
FROM employee JOIN role ON (employee.role_id = role.id)
ORDER BY salary ASC;

--Display all departments
SELECT department.id, department.department
FROM department;

SELECT * FROM ems_db.department;


-- display all managers
SELECT concat(employee.first_name, " ", employee.last_name) AS Name, role.title
FROM employee JOIN role ON (employee.role_id = role.id)
Where manager_id IS null;

