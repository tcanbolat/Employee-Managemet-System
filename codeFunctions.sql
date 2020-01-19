DROP DATABASE IF EXISTS ems_db;

CREATE DATABASE ems_db;

USE ems_db;

CREATE TABLE `employee` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(30) NOT NULL,
	`last_name` varchar(30) NOT NULL,
	`role_id` INT NOT NULL,
	`manager_id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `role` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar(30) NOT NULL,
	`salary` DECIMAL(30) NOT NULL,
	`department_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `department` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(30) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `employee` ADD CONSTRAINT `employee_fk0` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`);

ALTER TABLE `employee` ADD CONSTRAINT `employee_fk1` FOREIGN KEY (`manager_id`) REFERENCES `role`(`id`);

ALTER TABLE `role` ADD CONSTRAINT `role_fk0` FOREIGN KEY (`department_id`) REFERENCES `department`(`id`);


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
VALUES ("John", "Smith", 1, NULL),
	   ("Steve", "Roland", 2, 1),
	   ("Julie", "Summers", 3, 2),
	   ("Ahmed", "Yusuf", 4, NULL),
	   ("Sarah", "Johansen", 5, 4),
	   ("Harold", "Little", 6, NULL),
	   ("Trevor", "Dune", 7, 6),
	   ("Eugene", "Green", 8, 7),
	   ("Hasan", "Demir", 9, NULL),
	   ("Haile", "Hall", 10, 9),
	   ("Samir", "Rakesh", 11, 10);