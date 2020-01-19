USE ems_db;

INSERT INTO department (name)
VALUES ("sales"),
	   ("finance"),
	   ("HR"),
	   ("engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("sales director", 83000, 1),
	   ("sales manager", 52000, 1),
	   ("sales rep", 34000, 1),
	   ("finance director", 87000, 2),
	   ("finance manager", 63000, 2),
	   ("HR Director", 78000, 3),
	   ("HR manager", 50000, 3),
	   ("HR rep", 32500, 3),
	   ("engineering director", 86000, 4),
	   ("engineering manager", 60000, 4),
	   ("engineer", 55000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1),
	   ("Steve", "Roland", 2, 1),
	   ("Julie", "Summers", 3, 2),
	   ("Ahmed", "Yusuf", 4),
	   ("Sarah", "Johansen", 5, 4),
	   ("Harold", "Little", 6),
	   ("Trevor", "Dune", 7, 6),
	   ("Eugene", "Green", 8, 7),
	   ("Hasan", "Demir", 9),
	   ("Haile", "Hall", 10, 9),
	   ("Samir", "Rakesh", 11, 10);