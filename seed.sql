INSERT INTO department (department)
VALUES ("Sales"),
	   ("Finance"),
	   ("HR"),
	   ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager, Sales", 63000, 1),
	   ("Sales Rep", 34000, 1),
	   ("Manager, Finance", 68000, 2),
	   ("Accountant", 60000, 2),
	   ("Manager, HR", 50000, 3),
	   ("HR Rep", 32500, 3),
	   ("Manager, Engineering", 97000, 4),
	   ("Engineer", 68000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL),
	   ("Steve", "Roland", 2, 1),
	   ("Ahmed", "Yusuf", 3, NULL),
	   ("Sarah", "Johansen", 4, 3),
	   ("Ashley", "Bolt", 2, 1),
	   ("Harold", "Little", 5, NULL),
	   ("Kate", "Hall", 8, 7),
	   ("Tony", "Rodriguez", 4, 3),
	   ("Brent", "Osborn", 4, 3),
	   ("Trevor", "Dune", 6, 5),
	   ("Sam", "Good", 6, 5),
	   ("Julie", "Dune", 6, 5),
	   ("Hasan", "Demir", 7, NULL),
       ("Eugene", "Green", 8, 7),
	   ("Haile", "Hall", 4, 3),
	   ("Samir", "Rakesh", 2, 1),
	   ("Rebecca", "June", 8, 7);